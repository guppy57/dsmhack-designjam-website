interface BentoCardProps {
  children: React.ReactNode;
}

export default function BentoCard(props: BentoCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg min-h-[240px]">
      {props.children}
    </div>
  );
}