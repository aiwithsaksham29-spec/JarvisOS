"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("jarvis", {
  // AI Chat
  chat: (message) => electron.ipcRenderer.invoke("ollama:chat", message),
  // Persistent Chat
  loadChat: () => electron.ipcRenderer.invoke("chat:load"),
  saveChat: (messages) => electron.ipcRenderer.invoke("chat:save", messages),
  // Main Process Messages
  onMainMessage: (callback) => {
    electron.ipcRenderer.on("main-process-message", (_, message) => {
      callback(message);
    });
  }
});
