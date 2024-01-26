import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { WORK_EXPERIENCE } from "@/utils/constants";

export default function Experience() {
  return (
    <MotionWrapper>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Work experience</h1>
        {WORK_EXPERIENCE.map((experience, idx) => (
          <Card
            key={idx}
            title={experience.role}
            subtitle={`${experience.company} - ${experience.dates}`}
          >
            <div className="text-sm">
              <ul className="list-inside list-disc">
                {experience.duties.map((duty, idx) => (
                  <li key={idx}>{duty}</li>
                ))}
              </ul>
              <div className="mt-4">
                <span className="font-semibold">Skills: </span>
                {experience.skills.join(", ")}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </MotionWrapper>
  );
}
