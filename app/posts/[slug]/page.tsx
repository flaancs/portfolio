import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { POSTS } from "@/utils/constants";
import { Markdown } from "@/components/Markdown";
import { Metadata } from "next";
import { readFileSync } from "fs";
import Image from "next/image";
import path from "path";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postInfo = POSTS.find((post) => post.id === params.slug);

  return {
    title: `flaancs.dev - ${postInfo?.title}`,
    description: postInfo?.description,
    openGraph: {
      title: `flaancs.dev - ${postInfo?.title}`,
      description: postInfo?.description,
      images: [`https://www.flaancs.dev${postInfo?.image}`],
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const data = readFileSync(file, "utf8");
  const postInfo = POSTS.find((post) => post.id === params.slug)!;

  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Card
            title={postInfo.title}
            subtitle={postInfo.readTime}
            titleClassName="text-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="w-full flex justify-center">
                <Image
                  src={postInfo.image}
                  alt={postInfo.title}
                  height={630}
                  width={1200}
                  layout="responsive"
                  className="rounded-lg max-h-[630px] max-w-[1200px] object-cover"
                />
              </div>
              <Markdown source={data} />
            </div>
          </Card>
        </div>
      </div>
    </MotionWrapper>
  );
}
