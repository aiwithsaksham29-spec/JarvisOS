import { ipcMain } from "electron";
import { chatWithOllama } from "../services/ollama";
import { saveChat, loadChat } from "../storage/chatHistory";

export function registerOllamaIPC() {
  // Chat with Ollama
  ipcMain.handle("ollama:chat", async (_, message: string) => {
    try {
      const response = await chatWithOllama(message);

      return {
        success: true,
        message: response,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown error",
      };
    }
  });

  // Save Chat History
  ipcMain.handle("chat:save", async (_, messages) => {
    saveChat(messages);
    return true;
  });

  // Load Chat History
  ipcMain.handle("chat:load", async () => {
    return loadChat();
  });
}