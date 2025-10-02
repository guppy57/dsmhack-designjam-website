interface BentoCardProps {
  children: React.ReactNode;
}

export default function BentoCard(props: BentoCardProps) {
  return (
    <div className="p-4 bg-white rounded-xl min-h-[240px] drop-shadow-xl border border-gray-200">
      {props.children}
    </div>
  );
}