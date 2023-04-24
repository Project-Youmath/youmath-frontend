import styles from './category-section.module.scss'
import {SectionMenu} from "../../../section-menu";
import {CategorySectionContent} from "../category-section-content/category-section-content";

export const CategorySection = () => {
    return (
        <section className={styles.categorySection}>
            <div className={styles.categorySection__content}>
                {/*  BreadCrump  */}
                <div className={styles.categorySection__contentFlex}>
                    <SectionMenu/>
                    <CategorySectionContent/>
                </div>
            </div>
        </section>
    );
};