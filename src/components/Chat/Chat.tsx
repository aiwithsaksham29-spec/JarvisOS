import { useState } from "react";
import Orb from "../Orb/Orb";
import MessageList from "../MessageList/MessageList";
import { useChat } from "../../hooks/useChat";

export default function Chat() {
  const [input, setInput] = useState("");

  const { messages, loading, sendMessage } = useChat();

  async function askAI(text: string) {
    const result = await window.jarvis.chat(text);
    return result.message;
  }

  async function handleSend() {
    if (!input.trim()) return;

    const text = input;
    setInput("");

    await sendMessage(text, askAI);
  }

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Orb />
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "#9ca3af",
              marginTop: "40px",
            }}
          >
            <h2>Hello Saksham 👋</h2>
            <p>Ask Jarvis anything.</p>
          </div>
        ) : (
          <MessageList
            messages={messages}
            loading={loading}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask Jarvis anything..."
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #333",
            background: "#18181b",
            color: "white",
            fontSize: "16px",
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            padding: "16px 24px",
            borderRadius: "12px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}