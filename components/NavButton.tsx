"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

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
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = pathname.split("/")[1];

  const linkClassName = classNames(
    "hover:bg-gray-700 py-2 px-4 rounded flex gap-4 items-center",
    {
      "bg-gray-700":
        segments.length > 2 ? path.includes(page) : pathname === path,
    }
  );

  return (
    <Link
      href={path}
      target={target}
      onClick={onNavigate}
      className={linkClassName}
    >
      {icon}
      {title}
    </Link>
  );
}
