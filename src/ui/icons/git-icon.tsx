import React, {FC} from 'react';
import {IIconProps} from "./icon-props-interface";

export const GitIcon:FC<IIconProps> = ({classname}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
            <path d="M10.0703 20.5029C10.0703 20.3563 10.038 20.2114 9.97578 20.0786C9.91353 19.9458 9.82284 19.8284 9.71014 19.7345C9.59743 19.6407 9.46546 19.5728 9.32359 19.5356C9.18171 19.4985 9.03341 19.493 8.88917 19.5195C7.58009 19.7598 5.92726 19.7959 5.4878 18.5615C5.10461 17.6055 4.46987 16.7711 3.65089 16.1465C3.59246 16.1148 3.53677 16.0782 3.48439 16.0372C3.41272 15.8481 3.2854 15.6852 3.11925 15.5699C2.95311 15.4547 2.75592 15.3925 2.55372 15.3916H2.54884C2.28444 15.3916 2.03077 15.4962 1.84335 15.6827C1.65594 15.8692 1.55004 16.1224 1.54884 16.3868C1.54493 17.2022 2.35984 17.7247 2.69044 17.9014C3.08029 18.2931 3.39359 18.7541 3.61427 19.2608C3.97853 20.2842 5.03712 21.837 8.08009 21.6368C8.08109 21.6719 8.08204 21.7051 8.08253 21.7354L8.08692 22.003C8.08692 22.2682 8.19228 22.5226 8.37982 22.7101C8.56735 22.8976 8.82171 23.003 9.08692 23.003C9.35214 23.003 9.60649 22.8976 9.79403 22.7101C9.98157 22.5226 10.0869 22.2682 10.0869 22.003L10.082 21.6846C10.0772 21.4951 10.0703 21.2207 10.0703 20.5029ZM20.7373 5.37694C20.7691 5.25194 20.8003 5.11327 20.8277 4.95702C20.9894 3.84261 20.8484 2.70521 20.4195 1.66402C20.3653 1.52828 20.2822 1.40603 20.1758 1.30582C20.0694 1.20562 19.9425 1.12989 19.8037 1.08395C19.4477 0.963828 18.1333 0.727498 15.6197 2.33395C13.5302 1.84224 11.3551 1.84224 9.26565 2.33395C6.76222 0.751028 5.4546 0.965828 5.10206 1.07911C4.95993 1.12319 4.82946 1.19851 4.72021 1.29957C4.61097 1.40062 4.52572 1.52483 4.47071 1.66311C4.03301 2.72429 3.89355 3.88488 4.06739 5.01955C4.09181 5.14748 4.11817 5.26565 4.14552 5.37404C3.31709 6.47748 2.87583 7.8234 2.89015 9.20314C2.88745 9.51097 2.90163 9.81873 2.93263 10.125C3.26663 14.7275 6.26663 16.1094 8.35694 16.584C8.31349 16.709 8.27394 16.8428 8.23878 16.9844C8.17612 17.2417 8.21805 17.5133 8.35538 17.7398C8.49271 17.9662 8.71422 18.1289 8.97135 18.1923C9.22848 18.2556 9.50024 18.2144 9.72703 18.0777C9.95382 17.941 10.1171 17.7199 10.1812 17.4629C10.2448 17.1297 10.4079 16.8236 10.6489 16.585C10.7947 16.4574 10.9002 16.2902 10.9527 16.1037C11.0052 15.9172 11.0023 15.7195 10.9445 15.5346C10.8866 15.3497 10.7763 15.1856 10.6269 15.0623C10.4775 14.9389 10.2955 14.8617 10.103 14.8399C6.64894 14.4453 5.14942 13.0381 4.92384 9.94143C4.89885 9.69616 4.88761 9.44968 4.89015 9.20315C4.87411 8.2198 5.19898 7.26123 5.80958 6.49026C5.87093 6.40988 5.93628 6.33263 6.00538 6.25881C6.12781 6.12181 6.21013 5.95373 6.2433 5.77301C6.27646 5.5923 6.25919 5.40594 6.19338 5.2344C6.12592 5.05393 6.07397 4.86803 6.03811 4.67873C5.95664 4.14044 5.98337 3.59132 6.11671 3.06349C6.98585 3.30896 7.80383 3.70853 8.53171 4.24317C8.65208 4.32334 8.78828 4.3767 8.93108 4.39961C9.07388 4.42253 9.21994 4.41447 9.35935 4.37599C11.3805 3.82749 13.5113 3.82783 15.5322 4.37699C15.6724 4.41543 15.8192 4.42303 15.9626 4.39926C16.106 4.37549 16.2425 4.32091 16.3628 4.2393C17.0872 3.70244 17.9018 3.2993 18.768 3.04887C18.9008 3.56402 18.9305 4.10032 18.8554 4.62699C18.8192 4.83453 18.7626 5.03799 18.6865 5.23442C18.6207 5.40596 18.6034 5.59232 18.6366 5.77303C18.6697 5.95375 18.7521 6.12183 18.8745 6.25883C18.9516 6.34574 19.0288 6.43949 19.0981 6.52738C19.7044 7.2853 20.0238 8.23285 20 9.20314C20.0018 9.46275 19.9893 9.72226 19.9624 9.98048C19.7422 13.0361 18.2368 14.4443 14.7666 14.8398C14.5741 14.8618 14.392 14.9392 14.2427 15.0626C14.0933 15.1861 13.983 15.3503 13.9253 15.5353C13.8675 15.7202 13.8647 15.918 13.9172 16.1046C13.9698 16.2911 14.0754 16.4583 14.2212 16.5859C14.4698 16.831 14.6333 17.1493 14.6875 17.4941C14.7551 17.7618 14.7861 18.0375 14.7798 18.3135V20.6475C14.77 21.2949 14.77 21.7803 14.77 22.0029C14.77 22.2682 14.8754 22.5225 15.0629 22.71C15.2504 22.8976 15.5048 23.0029 15.77 23.0029C16.0352 23.0029 16.2896 22.8976 16.4771 22.71C16.6647 22.5225 16.77 22.2682 16.77 22.0029C16.77 21.7861 16.77 21.3106 16.7798 20.6631V18.3135C16.7878 17.8713 16.7358 17.4301 16.625 17.002C16.5933 16.8614 16.5545 16.7226 16.5088 16.586C18.03 16.3332 19.4123 15.5489 20.4094 14.3726C21.4065 13.1962 21.9539 11.7042 21.9541 10.1621C21.987 9.84355 22.0024 9.5234 22 9.20314C22.0222 7.82191 21.5773 6.47366 20.7373 5.37696L20.7373 5.37694Z" fill="#282A2E"/>
        </svg>

    );
};
