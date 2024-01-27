import { Card } from "@/components/Card";
import { CustomLink } from "@/components/CustomLink";
import { MotionWrapper } from "@/components/MotionWrapper";
import { CERTIFICATIONS, EDUCATION_EXPERIENCE } from "@/utils/constants";

export default function Education() {
  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
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
                <CustomLink target="_blank" href={experience.credential}>
                  Show credential
                </CustomLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
