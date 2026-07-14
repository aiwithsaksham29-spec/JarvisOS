import { useState } from "react";
import { ChatMessage } from "../types/chat";
import { jarvis } from "../core/Jarvis";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(
    text: string,
    askAI: (text: string) => Promise<string>
  ) {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    jarvis.addMessage(userMessage);

    setMessages([...jarvis.getConversation()]);

    setLoading(true);

    try {
      const reply = await askAI(text);

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
        createdAt: new Date(),
      };

      jarvis.addMessage(aiMessage);

      setMessages([...jarvis.getConversation()]);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    sendMessage,
  };
}