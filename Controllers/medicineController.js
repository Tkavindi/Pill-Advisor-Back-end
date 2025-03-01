require('dotenv').config(); // Load environment variables

const { GoogleGenerativeAI } = require('@google/generative-ai');
const apiKey = process.env.GOOGLE_API_KEY; // Securely access the key

const genAI = new GoogleGenerativeAI(apiKey);


const getMedicineInfo = async (req, res) => {
    try {
        const medicine = req.body.name;
        if (!medicine) {
            return res.status(400).json({ error: 'Medicine name is required' });
        }

        const prompt = `Provide detailed information about the medicine "${medicine}" in a structured format like JSON with the following fields:
        {
            "uses": "Describe the conditions or symptoms the medicine treats.",
            "precautions": "List precautions, warnings, and contraindications.",
            "dosage": "Recommended dosage, frequency, and whether it should be taken with food or water.",
            "side_effects": "Common and serious side effects.",
            "drug_interactions": "List medications, foods, or substances that may interact with this medicine.",
            "other_details": "Any additional important information for users."
        }
        Ensure each field has clear and concise information that is medically accurate and easy to understand.`;

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const chatSession = model.startChat({
            generationConfig: {
                temperature: 1,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 8192,
                responseMimeType: "application/json",
            },
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        const response = JSON.parse(result.response.text());

        res.json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getMedicineInfo,
};
