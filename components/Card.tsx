import classnames from "classnames";

export interface CardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Card({
  title,
  subtitle,
  className,
  titleClassName,
  children,
  onClick,
}: CardProps) {
  const cardClassName = classnames(
    "text-left bg-gray-900 hover:bg-gray-800 rounded p-4",
    className
  );
  const cardTitleClassName = classnames(
    "font-semibold text-md",
    titleClassName
  );

  return onClick ? (
    <button className={cardClassName} onClick={onClick}>
      <p className={cardTitleClassName}>{title}</p>
      <p className="font-semibold text-xs">{subtitle}</p>
      <div className="mt-2">{children}</div>
    </button>
  ) : (
    <div className={cardClassName} onClick={onClick}>
      <p className={cardTitleClassName}>{title}</p>
      <p className="font-semibold text-xs">{subtitle}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
