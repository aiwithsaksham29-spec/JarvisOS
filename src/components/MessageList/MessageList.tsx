import { useEffect, useRef } from "react";
import Message from "../Message/Message";
import TypingIndicator from "../TypingIndicator/TypingIndicator";
import { ChatMessage } from "../../types/chat";

interface Props {
  messages: ChatMessage[];
  loading: boolean;
}

export default function MessageList({
  messages,
  loading,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
        />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}