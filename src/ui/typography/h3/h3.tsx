import styles from './h3.module.scss'
import {FC} from "react";
import clsx from "clsx";

interface IH3Props {
    children: string | number;
    extraClass?: string;

    decoration?: "underline";
}

export const H3:FC<IH3Props> = ({children, extraClass, decoration}) => {
    const style = clsx({
        [styles.h]: true,
        [String(extraClass)]: !!extraClass,
        [styles.h__underline]: decoration === "underline"
    })

    return (
        <h3 className={style}>{children}</h3>
    );
};
