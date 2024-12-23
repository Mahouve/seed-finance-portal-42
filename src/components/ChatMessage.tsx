interface ChatMessageProps {
  role: string;
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={`p-2 rounded-lg text-sm ${
        isUser
          ? "bg-primary text-white ml-auto"
          : "bg-background border border-border"
      }`}
      style={{ maxWidth: "90%" }}
    >
      {content}
    </div>
  );
};