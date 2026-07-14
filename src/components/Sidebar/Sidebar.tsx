const menuItems = [
  "💬 Chat",
  "🧠 Memory",
  "🤖 Agents",
  "🌐 Browser",
  "⚡ Automations",
  "📁 Files",
  "⚙️ Settings",
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        background: "#111111",
        borderRight: "1px solid #27272a",
        height: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          color: "white",
          marginTop: 0,
          marginBottom: "25px",
          fontSize: "18px",
        }}
      >
        Navigation
      </h2>

      {menuItems.map((item) => (
        <button
          key={item}
          style={{
            width: "100%",
            background: "transparent",
            color: "#d4d4d8",
            border: "none",
            textAlign: "left",
            padding: "12px",
            marginBottom: "8px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "15px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#27272a";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          {item}
        </button>
      ))}
    </aside>
  );
}