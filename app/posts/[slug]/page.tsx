import { Card } from "@/components/Card";
import { MotionWrapper } from "@/components/MotionWrapper";
import { promises as fs } from "fs";
import { POSTS } from "@/utils/constants";
import { Markdown } from "@/components/Markdown";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postInfo = POSTS.find((post) => post.id === params.slug);

  return {
    title: `flaancs.dev - ${postInfo?.title}`,
    description: postInfo?.description,
    openGraph: {
      images: ["/images/og.png"],
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const source = await fs.readFile(
    process.cwd() + `/posts/${params.slug}.md`,
    "utf8"
  );
  const postInfo = POSTS.find((post) => post.id === params.slug);

  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Card title={postInfo?.title} subtitle={postInfo?.readTime}>
            <Markdown source={source} />
          </Card>
        </div>
      </div>
    </MotionWrapper>
  );
}
