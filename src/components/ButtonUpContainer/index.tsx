import { useLayoutEffect, useState } from "react";
import { ButtonUp } from "../ui/icons/button-up";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";

const ButtonUpContainer = ({footerHeight}: {footerHeight: number}) => {
    const [buttonClass, setButtonClass] = useState(styles.ButtonUpHidden);
    const [offsetFooter, setOffsetFooter] = useState(10);

    const { pathname } = useLocation();
    useLayoutEffect(() => {
        setOffsetFooter(10);
    }, [pathname]);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if ((scrollY + document.documentElement.clientHeight) - (document.documentElement.offsetHeight - footerHeight) > 0) {
            setOffsetFooter((scrollY + document.documentElement.clientHeight) - (document.documentElement.offsetHeight - footerHeight))
        }
        scrollY > document.documentElement.clientHeight ? setButtonClass(styles.ButtonUp) : setButtonClass(styles.ButtonUpHidden);
    })

    return (
        <section className={styles.ButtonUpContainerFixed} style={{bottom: `${offsetFooter}px`}}>
            <ButtonUp classname={buttonClass} />
        </section>
    );
};
export default ButtonUpContainer;