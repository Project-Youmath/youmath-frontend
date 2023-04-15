import {FC} from 'react';
import {IIconProps} from "./icon-props-interface";

export const RightArrowIcon:FC<IIconProps> = ({classname}) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
            <path d="M43.4142 24L28 39.4142L26.5858 38L39.5856 25H5V23H39.5858L26.5858 9.99997L28 8.58575L43.4142 24Z"/>
        </svg>
    );
};
