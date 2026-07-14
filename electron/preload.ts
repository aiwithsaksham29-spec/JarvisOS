import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("jarvis", {
  chat: (message: string) => ipcRenderer.invoke("ollama:chat", message),

  onMainMessage: (callback: (message: string) => void) => {
    ipcRenderer.on("main-process-message", (_, message) => {
      callback(message);
    });
  },
});