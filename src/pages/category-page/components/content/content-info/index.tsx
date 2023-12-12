import styles from "./index.module.scss";
import { DownArrowIcon } from "../../../../../components/ui/icons/down-arrow-icon";
import { useAppSelector } from "../../../../../store/hooks/use-app-selector";
import { useEffect, useRef, useState } from "react";
import { UpArrowIcon } from "../../../../../components/ui/icons/up-arrow-icon";

export const CategorySectionContentInfo = () => {
  const { category } = useAppSelector((state) => state.categoryReducer);

  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const maxLines = 6;
      const lineHeight = parseInt(
        getComputedStyle(textElement).lineHeight || "0"
      );
      const maxHeight = maxLines * lineHeight;
      if (textElement.offsetHeight > maxHeight) {
        setIsOverflowed(true);
        setIsOpen(false);
      } else {
        setIsOverflowed(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      window.scrollTo(0, buttonRef.current ? buttonRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <section className={styles.section}>
      <div className={styles.title}>{category?.title}</div>
      <div className={styles.subtitle}>{category?.subtitle}</div>
      <div
        ref={textRef}
        className={`${styles.description} ${!isOpen ? styles.overflowed : ""}`}
      >
        {category?.description}
      </div>
      {isOverflowed && (
        <div className={styles.more} ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Скрыть" : "Подробнее..."}
          {isOpen ? <UpArrowIcon /> : <DownArrowIcon classname={styles.icon} />}
        </div>
      )}
    </section>
  );
};
