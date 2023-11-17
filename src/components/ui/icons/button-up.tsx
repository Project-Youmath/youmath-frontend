import React, { FC } from "react";
import { IIconProps } from "./icon-props-interface";

export const ButtonUp: FC<IIconProps> = ({ classname }) => {
  return (
    <svg
      onClick={() => window.scrollTo(0, 0)}
      className={classname}
      width="134em"
      height="134em"
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_651_4121)">
        <circle cx="67" cy="67" r="60" fill="#D3D6D5" />
        <path
          d="M67.2071 47.7928L82.6213 63.207L81.2071 64.6212L68.2071 51.6214V86.207H66.2071V51.6212L53.2071 64.6212L51.7928 63.207L67.2071 47.7928Z"
          fill="#282A2E"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_651_4121"
          x="0"
          y="0"
          width="134"
          height="134"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_651_4121"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.147726 0 0 0 0 0.279167 0 0 0 0 0.279167 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_651_4121"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_651_4121"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};