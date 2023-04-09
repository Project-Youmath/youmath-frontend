import styles from './h3.module.scss'
import {FC} from "react";
import clsx from "clsx";

interface IH3Props {
    children: string | number;
    extraClass?: string;

    decoration?: "underline";

    textColor?: "white" | "black" | "accent";
}

export const H3:FC<IH3Props> = ({children, extraClass, decoration, textColor = "black"}) => {
    const style = clsx({
        [styles.h]: true,
        [String(extraClass)]: !!extraClass,
        [styles.h_color_white]: textColor === "white",
        [styles.h_color_black]: textColor === "black",
        [styles.h_color_accent]: textColor === "accent",
        [styles.h__underline]: decoration === "underline"
    })

    return (
        <h3 className={style}>{children}</h3>
    );
};
