import styles from './header.module.scss'
import logo from '../../../../images/logo.png'
import {HeaderNav} from "../header-nav/header-nav";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <img src={logo} alt="Логотип youmath"/>
                <HeaderNav/>
            </div>
        </header>
    );
};
