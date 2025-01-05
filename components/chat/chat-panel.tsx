"use client";

import { useState } from "react";
import { ChatContainer } from "./chat-container";
import { ChatToggleButton } from "./chat-toggle-button";
import { cn } from "../../lib/utils";

export function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "fixed right-0 top-24 h-screen border-l bg-background shadow-lg transition-transform duration-300 ease-in-out",
          "w-full md:w-[400px]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ChatContainer />
      </div>
      <ChatToggleButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />
    </>
  );
}