import { FC } from "react";
import { IIconProps } from "./icon-props-interface";

export const BurgerIcon: FC<IIconProps> = ({ classname }) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 13L36 13M6 21L36 21M6 29L36 29"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
