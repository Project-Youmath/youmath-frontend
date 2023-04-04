import styles from './text.module.scss'
import clsx from "clsx";
import {FC} from "react";

interface ITextProps {
    children: string | number;

    extraclass?: string;

    size: "small" | "large" | "default";

    decoration?: "underline";

    textType: "text" | "button" | "tabs" | "footer";
    textColor: "white" | "black" | "accent"
}

export const Text:FC<ITextProps> = ({children,size, decoration, textType, extraclass, textColor}) => {

    const style = clsx({
        [styles.text] : true,
        [styles.text_size_small] : size === "small" && textType === "text",
        [styles.text_size_large] : size === "large" && textType === "text",
        [styles.text_size_tabs] : textType === "tabs",
        [styles.text_size_footer] : textType === "footer",
        [styles.text_size_button] : textType === "button",
        [styles.text_decorator_underline] : decoration === "underline",
        [String(extraclass)]: !!extraclass,
        [styles.text_color_white]: textColor === "white",
        [styles.text_color_black]: textColor === "black",
        [styles.text_color_accent]: textColor === "accent",
    })

    return (
        <p className={style}>{children}</p>
    );
};
