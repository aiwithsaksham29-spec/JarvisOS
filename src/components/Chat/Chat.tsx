import { useState } from "react";
import Orb from "../Orb/Orb";

export default function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("Hello! I'm Jarvis.");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const result = await window.jarvis.chat(input);
      setResponse(result.message);
    } catch (err) {
      setResponse("Failed to contact Ollama.");
    }

    setLoading(false);
    setInput("");
  }

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Orb />

        <h1>Hello, Saksham 👋</h1>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "700px",
            textAlign: "center",
            whiteSpace: "pre-wrap",
          }}
        >
          {loading ? "Jarvis is thinking..." : response}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: "16px 24px",
            borderRadius: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}