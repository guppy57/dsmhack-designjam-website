import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function BentoCard(props: BentoCardProps) {
  return (
    <motion.div
      className={cn(props.className, "px-6 py-7 bg-white rounded-xl min-h-[240px] drop-shadow-xl border border-gray-200 w-full h-full")}
      whileHover={{
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {props.children}
    </motion.div>
  );
}