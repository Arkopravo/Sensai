import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "sensai", 
    name: "Sensai"  ,
    crendentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    }
});
