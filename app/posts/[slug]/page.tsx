import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { POSTS } from "@/utils/constants";
import { Markdown } from "@/components/Markdown";
import { Metadata } from "next";
import { readFileSync } from 'fs';
import path from 'path';

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
      images: ["https://www.flaancs.dev/images/og.png"],
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const data = readFileSync(file, 'utf8');
  const postInfo = POSTS.find((post) => post.id === params.slug);

  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Card title={postInfo?.title} subtitle={postInfo?.readTime}>
            <Markdown source={data} />
          </Card>
        </div>
      </div>
    </MotionWrapper>
  );
}
