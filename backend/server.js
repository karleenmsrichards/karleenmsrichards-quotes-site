const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.use(express.json());

app.post('/quote', async (req, res) => {
  const { emotion } = req.body; 
  
  if (!emotion) {
    return res.status(400).json({ error: 'Emotion is required.' });
  }

  const prompt = `I've been job hunting for a long time and I'm feeling ${emotion}. Could you share one thing creative that could inspire me and give me the strength to keep going?`;

  try {
    const result = await model.generateContent(prompt);
    
    const quote = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No quote generated.';
    
    res.json({
        status: 'success',
        quote: quote        
      });
      
  } catch (error) {
    console.error('Error generating quote:', error);
    res.status(500).json({ error: 'An error occurred while generating the quote.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
