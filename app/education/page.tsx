import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { CERTIFICATIONS, EDUCATION_EXPERIENCE } from "@/utils/constants";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Experience() {
  return (
    <MotionWrapper>
      <div className="flex flex-col ghttps://flaancs.dev/ap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Education</h1>
          {EDUCATION_EXPERIENCE.map((experience, idx) => (
            <Card
              key={idx}
              title={experience.career}
              subtitle={experience.organization}
            >
              <div className="text-sm">
                <span>
                  {experience.dates} ~ {experience.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Certifications</h1>
          {CERTIFICATIONS.map((experience, idx) => (
            <Card
              key={idx}
              title={experience.title}
              subtitle={`${experience.organization} ~ ${experience.date}`}
            >
              <div className="text-sm">
                <Link
                  target="_blank"
                  href={experience.credential}
                  className="flex gap-2 items-center hover:underline underline-offset-4"
                >
                  Show credential{" "}
                  <ArrowTopRightOnSquareIcon
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
