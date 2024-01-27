import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { StackCard } from "@/components/StackCard";
import { DiamondIcon } from "@/icons/Diamond";
import { BACKEND_STACK, FRONTEND_STACK } from "@/utils/constants";

export default function Experience() {
  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <Card>
          <div className="flex gap-4 items-center">
            <DiamondIcon width={48} height={48} />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Top skills</h1>
              <span className="text-sm">Typescript - Python</span>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Frontend stack</h1>
          {FRONTEND_STACK.map((stack, idx) => (
            <Card key={idx} title={stack.title} className="hover:bg-gray-900">
              <div className="flex flex-col md:flex-row gap-6">
                {stack.items.map((item, stackIdx) => (
                  <StackCard key={stackIdx} name={item.name} icon={item.icon} />
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Backend stack</h1>
          {BACKEND_STACK.map((stack, idx) => (
            <Card key={idx} title={stack.title} className="hover:bg-gray-900">
              <div className="flex flex-col md:flex-row gap-6">
                {stack.items.map((item, stackIdx) => (
                  <StackCard key={stackIdx} name={item.name} icon={item.icon} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
