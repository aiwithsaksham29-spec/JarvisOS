import { useState } from "react";
import { ChatMessage } from "../types/chat";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "Hello Saksham! 👋 I'm Jarvis. How can I help you today?",
      createdAt: new Date(),
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const result = await window.jarvis.chat(text);

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: result.message,
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "❌ Failed to contact Ollama.",
          createdAt: new Date(),
        },
      ]);
    }

    setLoading(false);
  }

  return {
    messages,
    loading,
    sendMessage,
  };
}