"use client";

import { useState } from "react";
import { ChatMessage } from "./message";
import { ChatInput } from "./input";
import { ScrollArea } from "@/components/ui/scroll-area";

const INITIAL_MESSAGE = "Hi! I'm your AI assistant from Adaptimize. How can I help you today?";

export function ChatContainer() {
  const [messages, setMessages] = useState([
    { content: INITIAL_MESSAGE, isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { content: message, isUser: true }]);
    setIsLoading(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "Thank you for your message. As a demo, this is a simulated response. In a real implementation, this would connect to an AI service.",
        isUser: false
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">Chat with Adaptimize AI</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.content}
              isUser={message.isUser}
            />
          ))}
        </div>
      </ScrollArea>
      <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}