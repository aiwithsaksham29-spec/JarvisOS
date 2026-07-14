export default function TypingIndicator() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          background: "#27272a",
          padding: "14px 18px",
          borderRadius: "14px",
          color: "#9ca3af",
          fontStyle: "italic",
        }}
      >
        🤖 Jarvis is thinking...
      </div>
    </div>
  );
}