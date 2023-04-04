import styles from './h2.module.scss'
import {FC} from "react";

interface IH2Props {
    children: string | number;
    extraClass?: string;
}

export const H2:FC<IH2Props> = ({children, extraClass}) => {
    return (
        <h2 className={extraClass ? `${styles.h} ${extraClass}` : `${styles.h}`}>{children}</h2>
    );
};
