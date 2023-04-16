import styles from './section-menu-item.module.scss';
import {FC} from "react";

interface SectionMenuItemProps {
    children: string;
}

export const SectionMenuItem:FC<SectionMenuItemProps> = ({children}) => {
    return (
        <div className={styles.sectionMenuItem}>
            {children}
        </div>
    );
};
