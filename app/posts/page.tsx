import { MotionWrapper } from "@/components/MotionWrapper";
import { PostCard } from "@/components/PostCard";
import { POSTS } from "@/utils/constants";

export default function Posts() {
  return (
    <MotionWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Posts</h1>
          {POSTS.map((post, idx) => (
            <PostCard
              key={idx}
              id={post.id}
              title={post.title}
              readTime={post.readTime}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
