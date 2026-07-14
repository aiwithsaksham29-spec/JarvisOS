import { ChatMessage } from "../../types/chat";

interface Props {
  message: ChatMessage;
}

export default function Message({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          background: isUser ? "#2563eb" : "#27272a",
          padding: "14px",
          borderRadius: "14px",
          color: "white",
          maxWidth: "75%",
          whiteSpace: "pre-wrap",
        }}
      >
        {message.content}
      </div>
    </div>
  );
}