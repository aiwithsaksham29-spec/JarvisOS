import { ipcMain, app, BrowserWindow } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
const OLLAMA_URL = "http://127.0.0.1:11434/api/chat";
async function chatWithOllama(message) {
  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "qwen3:8b",
      messages: [
        {
          role: "system",
          content: `
You are Jarvis.

You are a highly intelligent desktop AI assistant created by Saksham.

Never say you are Qwen.
Never say you are Alibaba Cloud.
Never mention language models unless directly asked.

Your personality:

- Professional
- Calm
- Friendly
- Concise
- Helpful

You assist with:

- Programming
- AI
- Automation
- Research
- Productivity
- Desktop assistance

Always refer to yourself as Jarvis.
`
        },
        {
          role: "user",
          content: message
        }
      ],
      stream: false,
      options: {
        temperature: 0.7,
        num_ctx: 4096,
        num_predict: 512
      }
    })
  });
  if (!response.ok) {
    throw new Error("Failed to contact Ollama");
  }
  const data = await response.json();
  return data.message.content;
}
function registerOllamaIPC() {
  ipcMain.handle("ollama:chat", async (_, message) => {
    try {
      const response = await chatWithOllama(message);
      return {
        success: true,
        message: response
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error"
      };
    }
  });
}
createRequire(import.meta.url);
const __dirname$1 = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname$1, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname$1, "preload.mjs")
    }
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(() => {
  registerOllamaIPC();
  createWindow();
});
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
