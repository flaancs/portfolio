import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { SOFT_SKILLS, TECHNICAL_SKILLS } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <MotionWrapper>
      <main>
        <div className="flex flex-col gap-10">
          <div>
            <Image
              src="/images/icon.png"
              alt="Portfolio icon"
              className="mb-6"
              width={50}
              height={50}
            />
            <h1 className="text-4xl font-bold">Hey there 👋</h1>
            <h2 className="text-xl">I&apos;m Gustavo</h2>
            <h3 className="text-sm">
              Most know as <span className="font-bold">Flan</span>
            </h3>
          </div>
          <div>
            <h1 className="text-xl font-bold">About me</h1>
            <span>
              With more than six years of rich experience in the tech industry,
              I have honed a comprehensive skill set encompassing both frontend
              and backend development. My career is marked by a diverse range of
              innovative projects, showcasing my versatility and depth as a
              Software Engineer. I am fervently motivated by the excitement of
              overcoming new challenges and unraveling complex problems. A
              fervent believer in lifelong learning, I continuously strive to
              advance my skills and keep pace with cutting-edge technological
              developments. This unwavering dedication to excellence positions
              me as a dynamic, adaptable, and proficient professional in the
              dynamic field of software engineering.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Technical skills</h1>
            {TECHNICAL_SKILLS.map((skill, idx) => (
              <Card key={idx} title={skill.name}>
                <span className="text-sm">{skill.description}</span>
              </Card>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Soft skills</h1>
            {SOFT_SKILLS.map((skill, idx) => (
              <Card key={idx} title={skill.name}>
                <span className="text-sm">{skill.description}</span>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </MotionWrapper>
  );
}
