export default function Header() {
  return (
    <header
      style={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: "1px solid #27272a",
        background: "#111111",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        JarvisOS
      </h1>

      <div
        style={{
          fontSize: "14px",
          color: "#9ca3af",
        }}
      >
        🟢 Ollama Offline (Coming Soon)
      </div>
    </header>
  );
}