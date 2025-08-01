export async function getAIResponse(prompt: string): Promise<string> {
  //Validate input
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    throw new Error('Invalid prompt: Prompt must be a non-empty string');
  }

  const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key is missing. Please configure your environment variables');
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); //15-second timeout

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: prompt.substring(0, 2000) //Truncated to prevent overflow
        }],
        max_tokens: 500, //Limit response lenght
        temprature: 0.7, //Control creativity
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error ${response.status} : ${errorData.errror?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.choices[0].message?.content || 'No response content found';

  } catch (error) {
    console.error('OpenAI API Error:', error);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your connection and try again');
    }
    throw new Error(`Failed to get AI response: ${error.message}`);
  }
}
