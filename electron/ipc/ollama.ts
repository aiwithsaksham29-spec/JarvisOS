import { ipcMain } from "electron";
import { chatWithOllama } from "../services/ollama";

export function registerOllamaIPC() {
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
}