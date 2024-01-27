import { Card } from "./Card";

export interface StackCardProps {
  name: string;
  icon: React.ReactNode;
}

export function StackCard({ name, icon }: StackCardProps) {
  return (
    <Card className="flex items-center justify-center bg-gray-800 md:w-24 md:h-24">
      <div className="flex flex-col items-center justify-center text-center gap-1">
        {icon}
        <p>{name}</p>
      </div>
    </Card>
  );
}
