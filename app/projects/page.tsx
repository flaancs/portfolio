import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { NavButton } from "@/components/NavButton";
import { PROJECTS } from "@/utils/constants";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Projects() {
  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Projects</h1>
          {PROJECTS.map((project, idx) => (
            <Card key={idx}>
              <div className="flex flex-col gap-8">
                {project.image && (
                  <Image
                    src={project.image}
                    width={1300}
                    height={950}
                    alt="Timeboost.ai"
                    className="rounded-md w-full h-60 object-cover"
                  />
                )}
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-xl font-bold">{project.title}</h1>
                  <span>{project.description}</span>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full flex flex-col gap-2 p-4 border rounded-md border-gray-700">
                      <h2 className="text-lg">Features</h2>
                      <ul className="list-disc list-inside">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full flex flex-col gap-2 p-4 border rounded-md border-gray-700">
                      <h2 className="text-lg">Stack</h2>
                      <ul className="list-disc list-inside">
                        {project.stack.map((stack, idx) => (
                          <li key={idx}>{stack}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {project.links && (
                    <div className="flex flex-col lg:flex-row items-center justify-end gap-4">
                      {project.links.map((link, idx) => (
                        <NavButton
                          key={idx}
                          path={link.url}
                          title={link.title}
                          target="_blank"
                          icon={
                            <ArrowTopRightOnSquareIcon
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          }
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
