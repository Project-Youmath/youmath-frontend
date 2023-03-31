import styles from './h1.module.scss'
import {FC} from "react";

interface IH1Props {
    children: string | number;
    extraClass?: string;
}

export const H1:FC<IH1Props> = ({children, extraClass}) => {
    return (
        <h1 className={extraClass ? `${styles.h} ${extraClass}` : `${styles.h}`}>{children}</h1>
    );
};
