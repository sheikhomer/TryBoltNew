"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatToggleButton({ isOpen, onClick }: ChatToggleButtonProps) {
  return (
    <Button
      variant="default"
      size="icon"
      className="fixed bottom-4 right-4 rounded-full shadow-lg z-50"
      onClick={onClick}
    >
      {isOpen ? (
        <X className="h-5 w-5" color="#18CB96" />
      ) : (
        <MessageCircle className="h-5 w-5" color="#18CB96" />
      )}
    </Button>
  );
}