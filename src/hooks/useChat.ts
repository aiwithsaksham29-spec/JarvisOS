import { useEffect, useState } from "react";
import { ChatMessage } from "../types/chat";
import { jarvis } from "../core/Jarvis";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      const history = await window.jarvis.loadChat();

      if (history && history.length > 0) {
        history.forEach((message: ChatMessage) => {
          jarvis.addMessage(message);
        });

        setMessages([...jarvis.getConversation()]);
      }
    }

    init();
  }, []);

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

    let updatedMessages = [...jarvis.getConversation()];

    setMessages(updatedMessages);

    await window.jarvis.saveChat(updatedMessages);

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

      updatedMessages = [...jarvis.getConversation()];

      setMessages(updatedMessages);

      await window.jarvis.saveChat(updatedMessages);
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