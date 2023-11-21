import React, { FC } from "react";
import { IIconProps } from "./icon-props-interface";

export const UpArrowIcon: FC<IIconProps> = ({ classname }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.35573 16.9131C3.59289 17.1502 3.87368 17.2688 4.1981 17.2688C4.52253 17.2688 4.803 17.1502 5.03953 16.9131L11.9881 9.96445L18.9605 16.9368C19.1818 17.1581 19.4585 17.2688 19.7905 17.2688C20.1225 17.2688 20.4071 17.1502 20.6443 16.9131C20.8814 16.6759 21 16.3951 21 16.0707C21 15.7463 20.8814 15.4658 20.6443 15.2293L12.6522 7.26089C12.5573 7.16603 12.4545 7.09868 12.3439 7.05884C12.2332 7.019 12.1146 6.99939 11.9881 7.00002C11.8617 7.00002 11.7431 7.01994 11.6324 7.05979C11.5217 7.09963 11.419 7.16666 11.3241 7.26089L3.33202 15.253C3.11067 15.4743 3 15.7472 3 16.0716C3 16.3961 3.11858 16.6765 3.35573 16.9131Z"
        fill="black"
      />
    </svg>
  );
};