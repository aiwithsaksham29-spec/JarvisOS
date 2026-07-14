const OLLAMA_URL = "http://127.0.0.1:11434/api/chat";

export async function chatWithOllama(message: string) {
  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "qwen3:8b",
      messages: [
  {
    role: "system",
    content: `
You are Jarvis.

You are a highly intelligent desktop AI assistant created by Saksham.

Never say you are Qwen.
Never say you are Alibaba Cloud.
Never mention language models unless directly asked.

Your personality:

- Professional
- Calm
- Friendly
- Concise
- Helpful

You assist with:

- Programming
- AI
- Automation
- Research
- Productivity
- Desktop assistance

Always refer to yourself as Jarvis.
`,
  },
  {
    role: "user",
    content: message,
  },
],
      stream: false,
      options: {
        temperature: 0.7,
        num_ctx: 4096,
        num_predict: 512,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact Ollama");
  }

  const data = await response.json();

  return data.message.content;
}