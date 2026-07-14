import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>AI-OS</h2>

        <button>💬 Chat</button>
        <button>🧠 Memory</button>
        <button>🤖 Agents</button>
        <button>⚙ Settings</button>
      </aside>

      <main className="main">
        <div className="orb"></div>

        <h1>Welcome</h1>

        <p>Your Personal AI Assistant</p>

        <div className="chat-box">
          <input
            type="text"
            placeholder="Ask me anything..."
          />

          <button>Send</button>
        </div>

        <div className="status">
          ● Ollama : Disconnected
        </div>
      </main>
    </div>
  );
}

export default App;