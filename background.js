// Importing Gemini API Client
const Gemini = require('gemini-api');

// Ideally, store API keys in environment variables or secure storage
const API_KEY = 'Your-Actual-Secure-API-Key-Here';

// Initializing the Gemini Client with API Key and Model
const gemini = new Gemini({
    apiKey: API_KEY,
    model: 'gemini-1.5-flash'
});

// Listening for messages from the extension's frontend
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'queryGemini') {
        gemini.query(request.query)
            .then(response => {
                sendResponse({ result: response });
            })
            .catch(error => {
                console.error('Error querying Gemini:', error);
                sendResponse({ error: 'An error occurred while querying Gemini. Please try again.' });
            });
        return true;  // Necessary to keep the message channel open for async response
    }
});
