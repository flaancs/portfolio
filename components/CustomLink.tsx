import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";

export interface CustomLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onNavigate?: () => void;
}

export function CustomLink({
  children,
  icon,
  className,
  onNavigate,
  ...props
}: CustomLinkProps) {
  const customLinkClassName = classNames(
    "block hover:underline underline-offset-4",
    className
  );

  return (
    <Link {...props} onClick={onNavigate} className={customLinkClassName}>
      <div className="flex gap-1 items-center">
        {children}{" "}
        {icon ? (
          icon
        ) : (
          <ArrowTopRightOnSquareIcon
            width={20}
            height={20}
            className="w-5 h-5"
          />
        )}
      </div>
    </Link>
  );
}
