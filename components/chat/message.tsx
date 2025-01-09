"use client";

import { cn } from "../../lib/utils";
import { User } from "lucide-react";
import Image from "next/image";
interface ChatMessageProps {
  message?: string;
  isUser: boolean;
  isLoading: boolean;
}

export function ChatMessage({ message, isUser, isLoading = false }: ChatMessageProps) {
  return (
    <div className={cn(
      "py-4 px-6",
      isUser ? "bg-white" : "bg-muted"
    )}>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
          {isUser ? (
            <div className="bg-white rounded-full p-1">
              <User className="w-6 h-6 text-primary-foreground" style={{ color: "#18CB96" }} />
            </div>
          ) : (
            <div className="rounded-full p-1 mt-1">
              <Image
                src="/assets/logo-icon.svg"
                alt="Adaptimize AI"
                width={24}
                height={24}
                className="h-8 w-8 rounded-full"  // adjusted size and removed mt-2
              />
            </div>
          )}
        </div>
        <div className="prose prose-sm dark:prose-invert">
          {isLoading ? (<div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
          ) : message}

        </div>
      </div>
    </div>
  );
}