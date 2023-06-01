import styles from "./category-section-content.module.scss";
import { CategorySectionContentInfo } from "../category-section-content-info/category-section-content-info";
import { SubcategoryCard } from "../subcategory-card/subcategory-card";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../store/hooks/use-app-dispatch";
import { getCategoryThunk } from "../../../../store/thunks";
import Loader from "../../../../components/loader";

export const CategorySectionContent = () => {
  const dispatch = useAppDispatch();
  const { isLoading, category } = useAppSelector(
    (state) => state.categoryReducer
  );
  const { categoryId } = useParams();
  useEffect(() => {
    dispatch(getCategoryThunk(categoryId ?? ""));
  }, [dispatch, categoryId]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.categorySectionContent}>
          <CategorySectionContentInfo />
          <div className={styles.categorySectionContent__cards}>
            {category?.subsections?.map((subcategory) => (
              <SubcategoryCard
                key={subcategory.title + subcategory.id}
                subcategory={subcategory}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
