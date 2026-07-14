import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("jarvis", {
  // AI Chat
  chat: (message: string) =>
    ipcRenderer.invoke("ollama:chat", message),

  // Persistent Chat
  loadChat: () =>
    ipcRenderer.invoke("chat:load"),

  saveChat: (messages: any[]) =>
    ipcRenderer.invoke("chat:save", messages),

  // Main Process Messages
  onMainMessage: (callback: (message: string) => void) => {
    ipcRenderer.on("main-process-message", (_, message) => {
      callback(message);
    });
  },
});