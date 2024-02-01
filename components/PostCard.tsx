"use client";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { CustomLink } from "./CustomLink";
import Image from "next/image";

export interface PostCardProps {
  title: string;
  readTime: string;
  image: string;
  id: string;
}

export function PostCard({ title, readTime, image, id }: PostCardProps) {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(`/posts/${id}`)}>
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={image}
          alt={title}
          height={400}
          width={400}
          layout="responsive"
          className="rounded-lg w-full md:max-w-[200px] object-cover"
        />
        <div className="text-sm flex flex-col gap-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          {readTime}
          <CustomLink href={`/posts/${id}`}>Read</CustomLink>
        </div>
      </div>
    </Card>
  );
}
