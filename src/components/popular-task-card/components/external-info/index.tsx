import styles from "./index.module.scss";
import { CategoryResource } from "../../../../api/types/resource/category-resource";
import { FC, useEffect, useRef, useState } from "react";

interface PopularTaskCardExternalInfoProps {
  category: CategoryResource;
  landscape: boolean;
  extraClass: string;
}

export const PopularTaskCardExternalInfo: FC<
  PopularTaskCardExternalInfoProps
> = ({ category, landscape, extraClass }) => {
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const textRef = useRef<HTMLParagraphElement | null>(null);

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
  return (
    <section
      className={`${styles.section} ${
        landscape ? styles.landscape : styles.portrait
      }`}
    >
      <p
        ref={textRef}
        className={`${styles.description} ${!isOpen ? styles.overflowed : ""} `}
      >
        {category.description}
      </p>
      {isOverflowed && (
        <p
          className={`${styles.description} ${styles.more} ${styles[extraClass]}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Скрыть" : "Подробнее..."}
        </p>
      )}
    </section>
  );
};
