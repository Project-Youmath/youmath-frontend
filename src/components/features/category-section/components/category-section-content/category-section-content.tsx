import styles from './category-section-content.module.scss';
import {CategorySectionContentInfo} from "../category-section-content-info/category-section-content-info";
import {CategoryCard} from "../category-card/category-card";

export const CategorySectionContent = () => {
    return (
        <div className={styles.categorySectionContent}>
            <CategorySectionContentInfo/>
            <div className={styles.categorySectionContent__cards}>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
            </div>
        </div>
    );
};
