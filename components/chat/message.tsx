"use client";

import { cn } from "../../lib/utils";
import { Cpu, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div className={cn(
      "py-4 px-6",
      isUser ? "bg-white" : "bg-muted"
    )}>
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
          {isUser ? (
            <div className="bg-primary rounded-full p-1">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
          ) : (
            <div className="bg-primary rounded-full p-1">
              <Cpu className="w-6 h-6 text-primary-foreground" />
            </div>
          )}
        </div>
        <div className="prose prose-sm dark:prose-invert">
          {message}
        </div>
      </div>
    </div>
  );
}