import React, { FC } from "react";
import { IIconProps } from "./icon-props-interface";

export const IcDotIcon: FC<IIconProps> = ({ classname }) => {
  return (
    <svg
      className={classname}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#12F3AF" />
    </svg>
  );
};
