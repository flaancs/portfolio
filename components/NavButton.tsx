import Link from "next/link";

export interface NavButtonProps {
  path: string;
  title: string;
  icon: React.ReactNode;
  target?: string;
  onNavigate?: () => void;
}

export function NavButton({
  path,
  title,
  icon,
  target,
  onNavigate,
}: NavButtonProps) {
  return (
    <Link
      href={path}
      target={target}
      onClick={onNavigate}
      className="hover:bg-gray-700 py-2 px-4 rounded flex gap-4 items-center"
    >
      {icon}
      {title}
    </Link>
  );
}
