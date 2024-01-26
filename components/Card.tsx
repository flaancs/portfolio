import classnames from "classnames";

export interface CardProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Card({ title, subtitle, className, children }: CardProps) {
  const cardClassName = classnames(
    "bg-gray-900 hover:bg-gray-800 rounded p-4",
    className
  );
  
  return (
    <div className={cardClassName}>
      <p className="font-semibold text-md">{title}</p>
      <p className="font-semibold text-xs">{subtitle}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
