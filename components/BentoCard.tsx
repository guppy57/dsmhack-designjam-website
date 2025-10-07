import { cn } from "@/lib/utils";
import React from "react";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function BentoCard(props: BentoCardProps) {
  return (
    <div className={cn(props.className, "px-6 py-7 bg-white rounded-xl min-h-[240px] drop-shadow-xl border border-gray-200 w-full h-full")}>
      {props.children}
    </div>
  );
}