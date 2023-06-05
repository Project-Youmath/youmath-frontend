import styles from "./popular-task-card-external-info.module.scss";
import { CategoryResource } from "../../../../api/types/resource/category-resource";
import { FC, useEffect, useRef, useState } from "react";

interface PopularTaskCardExternalInfoProps {
  category: CategoryResource;
}

export const PopularTaskCardExternalInfo: FC<
  PopularTaskCardExternalInfoProps
> = ({ category }) => {
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
      console.log(textElement.offsetHeight > maxHeight);
      console.log(textElement.offsetHeight);
      console.log(maxHeight);
      console.log(lineHeight);
      if (textElement.offsetHeight > maxHeight) {
        setIsOverflowed(true);
        setIsOpen(false);
      } else {
        setIsOverflowed(false);
      }
    }
  }, []);
  return (
    <div className={styles.popularTaskCardExternalInfo}>
      <p
        ref={textRef}
        className={`${styles.p} ${!isOpen ? styles.overflowed : ""} `}
      >
        {category.description}
      </p>
      {isOverflowed && (
        <p
          className={`${styles.p} ${styles.more}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Подробнее...
        </p>
      )}
    </div>
  );
};
