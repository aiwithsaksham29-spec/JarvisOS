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