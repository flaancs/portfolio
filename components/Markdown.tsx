"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";

export interface MarkdownProps {
  source: string;
}

export function Markdown({ source }: MarkdownProps) {
  return <MarkdownPreview source={source} className="!bg-transparent" />;
}
