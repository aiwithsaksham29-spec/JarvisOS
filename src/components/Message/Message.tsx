import { ChatMessage } from "../../types/chat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          padding: "16px",
          borderRadius: "16px",
          background: isUser ? "#2563eb" : "#1f2937",
          color: "white",
          lineHeight: 1.7,
          whiteSpace: "pre-wrap",
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}