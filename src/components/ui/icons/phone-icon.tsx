import {FC} from "react";
import {IIconProps} from "./icon-props-interface";

export const PhoneIcon:FC<IIconProps> = ({classname}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.47039 10.9392C7.74438 13.7185 10.2899 16.2641 13.0692 18.538L13.7889 19.1269C14.9818 20.1029 16.7201 20.0162 17.81 18.9264L19.4929 17.2434L16.3109 14.0614L13.6593 16.7131L7.28416 10.3379L9.94465 7.69505L6.76503 4.51544L5.08208 6.19838C3.99225 7.28822 3.90555 9.02655 4.88153 10.2195L5.47039 10.9392ZM11.8027 20.086C8.92052 17.7277 6.28069 15.0879 3.92248 12.2057L3.33361 11.4859C1.70698 9.49779 1.85148 6.60056 3.66787 4.78417L6.76503 1.68701L12.7778 7.69978L10.1173 10.3426L13.6593 13.8846L16.3109 11.233L22.3213 17.2434L19.2242 20.3406C17.4078 22.157 14.5106 22.3015 12.5225 20.6748L11.8027 20.086Z" fill="#282A2E"/>
        </svg>
    );
};
