import styles from './footer-logo-contact-line.module.scss'
import logo from "../../../../images/logo.png"
import {Text} from "../../../../ui/typography/text/text";

export const FooterLogoContactLine = () => {
    return (
        <div className={styles.logoContactLine}>
            <img src={logo} alt="Логотип youmath" className={styles.logoContactLine__logo}/>
            <Text size={"default"} textType={"button"} textColor={"white"} extraclass={styles.logoContactLine__contact}>Связаться с нами</Text>
        </div>
    );
};
