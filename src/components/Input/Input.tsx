interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  loading: boolean;
}

export default function Input({
  value,
  onChange,
  onSend,
  loading,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "20px",
      }}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
        placeholder="Ask Jarvis anything..."
        style={{
          flex: 1,
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #333",
          background: "#1f2937",
          color: "white",
          fontSize: "16px",
        }}
      />

      <button
        disabled={loading}
        onClick={onSend}
        style={{
          padding: "16px 24px",
          borderRadius: "12px",
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}