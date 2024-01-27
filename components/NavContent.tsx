import Image from "next/image";
import { NAVBAR_ROUTES, NAVBAR_SOCIALS } from "@/utils/constants";
import { NavButton } from "@/components/NavButton";

export interface NavContentProps {
  onNavigate?: () => void;
}

export function NavContent({ onNavigate }: NavContentProps) {
  return (
    <>
      <div className="flex items-center gap-4 border-b border-gray-800 py-4">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/43224383?v=4"
          alt="Profile photo"
        />
        <div className="flex flex-col text-sm">
          <span className="font-semibold">Gustavo Lara González</span>
          <span>Software Engineer</span>
        </div>
      </div>
      <div className=" flex flex-col gap-2 mt-4 lg:mt-0">
        {NAVBAR_ROUTES.map((route, idx) => (
          <NavButton key={idx} onNavigate={onNavigate} {...route} />
        ))}
      </div>
      <div className="border-t border-gray-800 flex flex-col gap-2 py-4 mt-4 lg:mt-0">
        {NAVBAR_SOCIALS.map((route, idx) => (
          <NavButton
            target="_blank"
            key={idx}
            onNavigate={onNavigate}
            {...route}
          />
        ))}
      </div>
    </>
  );
}
