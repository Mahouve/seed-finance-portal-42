import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  role: string;
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div
      className={`p-3 rounded-lg ${
        role === "assistant"
          ? "bg-background border border-border"
          : "bg-primary text-white"
      }`}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};