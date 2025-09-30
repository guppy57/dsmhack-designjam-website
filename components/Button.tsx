import { cn } from "@/lib/utils";

interface ButtonProps {
  style: "primary" | "secondary"
  href: string;
  text: string
}

export default function Button(props: ButtonProps) {
  return (
    <a
      className={cn(
        "px-5 py-3 text-white rounded-lg font-mono font-bold",
        props.style === "primary" ? "bg-[#9AB749]" : "bg-[#FB8500]"
      )}
      href={props.href}
    >
      {props.text}
    </a>
  );
}