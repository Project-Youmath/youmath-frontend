import styles from "./category-section-content-info.module.scss";
import { H2 } from "../../../../components/ui/typography/h2/h2";
import { Text } from "../../../../components/ui/typography/text/text";
import { DownArrowIcon } from "../../../../components/ui/icons/down-arrow-icon";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";

export const CategorySectionContentInfo = () => {
  const { category } = useAppSelector((state) => state.categoryReducer);
  return (
    <div className={styles.categorySectionContentInfo}>
      <H2>{category?.title ?? ""}</H2>
      <Text
        size="small"
        textType="text"
        textColor="black"
        extraclass={styles.categorySectionContentInfo__description}
      >
        {category?.description ?? ""}
      </Text>
      <button
        className={styles.categorySectionContentInfo__expandDescriptionBtn}
      >
        Подробнее{" "}
        <DownArrowIcon
          classname={
            styles.categorySectionContentInfo__expandDescriptionBtnIcon
          }
        />
      </button>
    </div>
  );
};
