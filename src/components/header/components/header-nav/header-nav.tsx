import styles from './header-nav.module.scss'
import {Text} from "../../../../ui/typography/text/text";

export const HeaderNav = () => {
    return (
        <nav className={styles.headerNav}>
            <Text size={"default"} textType={"button"} textColor={"white"} extraclass={styles.headerNav__link}>Разделы</Text>
            <Text size={"default"} textType={"button"} textColor={"white"} extraclass={styles.headerNav__link}>О проекте</Text>
        </nav>
    );
};
