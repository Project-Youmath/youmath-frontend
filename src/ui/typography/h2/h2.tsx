import styles from './h2.module.scss'
import {FC} from "react";
import clsx from "clsx";

interface IH2Props {
    children: string | number;
    extraClass?: string;

    textColor?: "white" | "black" | "accent";

}

export const H2:FC<IH2Props> = ({children, extraClass, textColor = "black"}) => {

    const style = clsx({
        [styles.h]: true,
        [`${extraClass}`]: !!extraClass,
        [styles.h_color_white]: textColor === "white",
        [styles.h_color_black]: textColor === "black",
        [styles.h_color_accent]: textColor === "accent",
    })

    return (
        <h2 className={style}>{children}</h2>
    );
};
