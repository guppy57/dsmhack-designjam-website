import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  style: "primary" | "secondary"
  href: string;
  text: string
}

export default function Button(props: ButtonProps) {
  return (
    <motion.a
      className={cn(
        "px-5 py-3 text-white rounded-lg tracking-tight font-bold drop-shadow-2xl",
        props.style === "primary" ? "bg-[#9AB749]" : "bg-[#FB8500]"
      )}
      href={props.href}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {props.text}
    </motion.a>
  );
}