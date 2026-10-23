uncertainties: { type: Type.ARRAY, items: { type: Type.STRING } },
    uncertaintiesBn: { type: Type.ARRAY, items: { type: Type.STRING } },
    adaptationOptions: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: {
      title: { type: Type.STRING }, titleBn: { type: Type.STRING }, details: { type: Type.STRING }, detailsBn: { type: Type.STRING }, targetExpert: { type: Type.STRING },
    }, required: ['title', 'titleBn', 'details', 'detailsBn', 'targetExpert'] } },
    additionalInfoNeeded: { type: Type.ARRAY, items: { type: Type.STRING } },
    additionalInfoNeededBn: { type: Type.ARRAY, items: { type: Type.STRING } },
    farmerSpeakingPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
    farmerSpeakingPointsBn: { type: Type.ARRAY, items: { type: Type.STRING } },
  },
  required: ['summary', 'summaryBn', 'evidenceSupports', 'evidenceSupportsBn', 'uncertainties', 'uncertaintiesBn', 'adaptationOptions', 'additionalInfoNeeded', 'additionalInfoNeededBn', 'farmerSpeakingPoints', 'farmerSpeakingPointsBn'],
};

app.post('/api/analyze', async (req, res) => {
  const body = req.body ?? {};
  const topic = typeof body.topic === 'string' ? body.topic : '';
  const studyArea = typeof body.studyArea === 'string' ? body.studyArea : 'Area not specified';
  const question = typeof body.question === 'string' ? body.question : '';
  const language = body.language === 'en' ? 'en' : 'bn';
  const allowedTopics = ['salinity', 'flooding', 'changing_rainfall'];

  if (!allowedTopics.includes(topic)) return res.status(400).json({ error: 'Please select a supported topic.' });
  if (studyArea.length > 300 || question.length > 3000) return res.status(400).json({ error: 'The study area or question is too long.' });

  const fallback = getFallbackResponse(topic, studyArea, question);
  if (!ai) return res.json({ ...fallback, language });

  try {
    const systemInstruction = `
You are CoastWise AI, an early research prototype for agricultural evidence review in coastal Bangladesh.
SAFETY AND EVIDENCE RULES:
- You are not a farmer's official adviser or an emergency warning service.
- Do not claim to have measured soil, water, rainfall, or market prices.
- This application has no live weather, market-price, soil-EC, water-EC, or crop-zoning API integration.
- Do not invent citations, publications, research findings, numerical thresholds, yields, costs, or probabilities.
- Do not promise profits or identify a guaranteed most-profitable crop.
- Do not give precise fertilizer doses, pesticide instructions, or field-specific crop prescriptions without adequate evidence.
- Distinguish general information from missing local measurements.
- Treat AI-generated claims as unverified until checked against the relevant original source.
- Recommend consulting a qualified local agricultural extension officer when field-specific decisions are needed.
- Provide clear, simple Bangla and English.
- Do not claim that any source was opened, checked, or queried live.
- Never imply that a reference portal's data has been integrated into this application.
- If information is missing, state the gap instead of guessing.
- Do not make up a source to support a claim.
- Do not include any source list in your response; the server adds fixed external reference links separately.
`;
    const userPrompt = `
TOPIC: ${topic}
STUDY AREA: ${studyArea}
LANGUAGE PREFERENCE: ${language}
USER QUESTION: ${question || 'General coastal agriculture question'}
Return a structured response with:
1. A cautious summary in English and easy Bangla.
2. What general evidence supports, without inventing specific findings.
3. What remains unknown for this particular location.
4. One or two cautious options to discuss with a local agricultural expert.
5. Additional local information needed.
6. Short speaking points in English and easy Bangla.
Avoid specific agronomic prescriptions unless directly supported.
Do not guarantee crop suitability, yield, recovery, or financial returns.
Do not claim that current official advisories or field measurements have been checked.
`;

    const response = await retryOn503(() => ai!.models.generateContent({
      model: 'gemini-flash-latest',
      contents: userPrompt,
      config: { systemInstruction, responseMimeType: 'application/json', responseSchema, temperature: 0.2 },
    }));
    const output = response.text;
    if (!output) throw new Error('Empty AI response');
    const parsed = JSON.parse(output);
    return res.json({
      ...parsed, sources: referenceSources, isFallback: false, modelUsed: 'gemini-flash-latest', language,
      disclaimer: 'AI-generated preliminary research response. Claims and external references have not been independently verified by this application. Not field-validated; not an official advisory or emergency warning service.',
      dataStatus: { liveWeatherConnected: false, liveMarketPricesConnected: false, liveSoilMeasurementsConnected: false, sourcesLiveChecked: false },
    });
  } catch (error) {
    console.error('AI generation failed; using fallback:', error);
    return res.json({ ...fallback, isFallback: true, modelUsed: 'safe-local-fallback', language });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey), liveWeatherConnected: false, liveMarketPricesConnected: false, liveSoilMeasurementsConnected: false, sourcesLiveChecked: false, timestamp: new Date().toISOString() });
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';
  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));
  }
  app.listen(PORT, '0.0.0.0', () => console.log(`CoastWise AI server running on http://0.0.0.0:${PORT}`));
}

startServer().catch((error) => {
  console.error('Failed to start CoastWise AI:', error);
  process.exit(1);
});
