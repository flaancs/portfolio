import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { AWARDS, MENTORSHIPS } from "@/utils/constants";
import { StarIcon } from "@heroicons/react/24/outline";

export default function Experience() {
  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Honors & awards</h1>
          {AWARDS.map((award, idx) => (
            <Card key={idx} title={award.title} subtitle={award.organization}>
              <div className="text-sm">
                <p className="flex gap-1 items-center">
                  <StarIcon width={16} height={16} className="w-4 h-4" />
                  {award.place} ~ {award.date}
                </p>
                <p>
                  <span className="font-semibold">Competition content:</span>{" "}
                  {award.content.join(", ")}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Mentorships</h1>
          {MENTORSHIPS.map((mentorship, idx) => (
            <Card key={idx} title={mentorship.title}>
              <div className="text-sm">
                <p>{mentorship.description}</p>
                <p>
                  <span className="font-semibold">Technologies taught: </span>
                  {mentorship.content.join(", ")}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
