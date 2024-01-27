import React from "react";
import type { SVGProps } from "react";

export function AngularIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.95em"
      height="1em"
      viewBox="0 0 256 271"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosAngularIcon0"
          x1="25.071%"
          x2="96.132%"
          y1="90.929%"
          y2="55.184%"
        >
          <stop offset="0%" stopColor="#E40035"></stop>
          <stop offset="24%" stopColor="#F60A48"></stop>
          <stop offset="35.2%" stopColor="#F20755"></stop>
          <stop offset="49.4%" stopColor="#DC087D"></stop>
          <stop offset="74.5%" stopColor="#9717E7"></stop>
          <stop offset="100%" stopColor="#6C00F5"></stop>
        </linearGradient>
        <linearGradient
          id="logosAngularIcon1"
          x1="21.863%"
          x2="68.367%"
          y1="12.058%"
          y2="68.21%"
        >
          <stop offset="0%" stopColor="#FF31D9"></stop>
          <stop offset="100%" stopColor="#FF5BE1" stopOpacity={0}></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosAngularIcon0)"
        d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
      ></path>
      <path
        fill="url(#logosAngularIcon1)"
        d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
      ></path>
    </svg>
  );
}
