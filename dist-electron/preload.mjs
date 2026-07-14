"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("jarvis", {
  chat: (message) => electron.ipcRenderer.invoke("ollama:chat", message),
  onMainMessage: (callback) => {
    electron.ipcRenderer.on("main-process-message", (_, message) => {
      callback(message);
    });
  }
});
