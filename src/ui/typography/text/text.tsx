import styles from './text.module.scss'
import clsx from "clsx";
import {FC} from "react";

interface ITextProps {
    children: string | number;

    extraclass?: string;

    size: "small" | "large" | "default";

    decoration?: "underline";

    textType: "text" | "button" | "tabs" | "footer";
}

export const Text:FC<ITextProps> = ({children,size, decoration, textType, extraclass}) => {

    const style = clsx({
        [styles.text] : true,
        [styles.text_size_small] : size === "small" && textType === "text",
        [styles.text_size_large] : size === "large" && textType === "text",
        [styles.text_size_tabs] : textType === "tabs",
        [styles.text_size_footer] : textType === "footer",
        [styles.text_size_button] : textType === "button",
        [styles.text_decorator_underline] : decoration === "underline",
        [String(extraclass)]: !!extraclass,
    })

    return (
        <p className={style}>{children}</p>
    );
};
