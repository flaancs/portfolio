import { Card } from "@/components/Card";
import { CustomLink } from "@/components/CustomLink";
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
              Also know as <span className="font-bold">Flan</span>
            </h3>
          </div>
          <div>
            <h1 className="text-xl font-bold">About me</h1>
            <span>
              Throughout my career in the tech world, I have managed to work on
              both the frontend and backend sides, always focusing on the best
              practices of software engineering. I have participated in various
              innovative projects, each one reinforcing my versatility and
              experience. I enjoy the opportunity to immerse myself in new
              challenges and decipher complex technical puzzles. As a dedicated
              advocate of continuous learning, I constantly update my skill set
              to stay in line with the latest in technology. This commitment to
              professional excellence makes me a dynamic, adaptable, and
              competent figure in the world of software engineering.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Resume</h1>
            <div className="flex gap-4">
              <CustomLink
                target="_blank"
                href="/files/resume_en.pdf"
                download="resume_en.pdf"
              >
                English version
              </CustomLink>
              <CustomLink
                target="_blank"
                href="/files/resume_es.pdf"
                download="resume_es.pdf"
              >
                Spanish version
              </CustomLink>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Technical skills</h1>
            {TECHNICAL_SKILLS.map((skill, idx) => (
              <Card key={idx} title={skill.name}>
                <span className="text-sm">{skill.description}</span>
              </Card>
            ))}
          </div>
          <div className="flex flex-col gap-4">
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
