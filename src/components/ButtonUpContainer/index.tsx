import { useState } from "react";
import { ButtonUp } from "../ui/icons/button-up";
import styles from "./index.module.scss";

interface IProps {
    isFixed: boolean;
}

const ButtonUpContainer = (props: IProps) => {
    const [buttonClass, isButtonClass] = useState(styles.ButtonUpHidden);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > document.documentElement.clientHeight ? isButtonClass(styles.ButtonUp) : isButtonClass(styles.ButtonUpHidden);
    })

    return (
        <section className={props.isFixed ? styles.ButtonUpContainerFixed : styles.ButtonUpContainer}>
            <ButtonUp classname={props.isFixed ? buttonClass : styles.ButtonUp} />
        </section>
    );
};
export default ButtonUpContainer;