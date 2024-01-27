import { Card } from "@/components/Card";
import { CustomLink } from "@/components/CustomLink";
import { MotionWrapper } from "@/components/MotionWrapper";
import { POSTS } from "@/utils/constants";

export default function Posts() {
  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Posts</h1>
          {POSTS.map((post, idx) => (
            <Card key={idx} title={post.title}>
              <div className="text-sm flex flex-col gap-2">
                {post.readTime}
                <CustomLink href={`/posts/${post.id}`}>Read</CustomLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
