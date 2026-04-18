import OpenAI from "openai";
import { OPENAI_API_KEY } from "../config/env.js";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

/**
 * Analyze resume and return structured data
 */
export const analyzeResume = async (resumeText) => {

const prompt = `
You are an advanced ATS Resume Analyzer.

Analyze the given resume and return ONLY valid JSON (no explanation, no markdown).

Very very IMPORTANT:
  - check the pdf actual resume/CV  

Follow this STRICT structure:

{
  "name": string,
  "score": number, 
  "jobMatch": number,
  "ats": "Optimized" | "Not Optimized",
  "summary": string,

  "skills": [string],

  "improvements": [
    {
      "title": string,
      "description": string,
      "priority": "High" | "Medium" | "Low"
    }
  ],

  "enhancementTips": string[],

  "recommendedJobs": [
    {
      "title": string,
      "match": number,
      "applyLink": string
    }
  ]
}

IMPORTANT RULES:

0. name = extract from resume or return "Unknown"
1. score = overall resume score (0–100)
2. jobMatch = overall matching strength (0–100)
3. ats = based on formatting, keywords, readability
4. summary:
    - short professional evaluation (1 or 2 lines)
    - like "Strong experience in X, but lacks measurable achievements. Needs better ATS optimization." or "Strong profile with solid technical skills."

5. skills:
    -like:
      programming, tools, frameworks
      communication, leadership, etc.
      - Extract all skills

6. improvements:
   - give best 3–5 items
   - prioritize based on impact
   - description should be short in 1 sentence, actionable, clear and specific 

7. enhancementTips:
   - must be short actionable tips (5–6 items)
   - like:
     "Improve your summary section"
     "Add measurable achievements"
     "Optimize ATS keywords"

8. recommendedJobs:
   - suggest best 3 or 4 relevant job roles
   - match should be realistic (50–95 range)
   - applyLink: 
      - use real link like "https://arc.dev/remote-jobs/full-stack" and "https://www.turing.com/jobs/remote-full-stack-jobs" and "https://in.indeed.com/q-full-stack-developer" and "https://www.hirist.tech/k/full-stack-jobs"


9. Keep response clean and strictly JSON parsable.

Resume:
${resumeText}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-5-nano",
    messages: [{ role: "user", content: prompt }],
    // temperature: 0.3,
  });

  const text = response.choices[0].message.content;

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error("Failed to parse AI response");
  }
};
