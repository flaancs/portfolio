"use client";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { CustomLink } from "./CustomLink";

export interface PostCardProps {
  title: string;
  readTime: string;
  id: string;
}

export function PostCard({ title, readTime, id }: PostCardProps) {
  const router = useRouter();

  return (
    <Card title={title} onClick={() => router.push(`/posts/${id}`)}>
      <div className="text-sm flex flex-col gap-2">
        {readTime}
        <CustomLink href={`/posts/${id}`}>Read</CustomLink>
      </div>
    </Card>
  );
}
