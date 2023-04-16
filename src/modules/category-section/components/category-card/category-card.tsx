import styles from './category-card.module.scss';
import {H3} from "../../../../ui/typography/h3/h3";
import {Text} from "../../../../ui/typography/text/text";
import {Link} from "react-router-dom";

export const CategoryCard = () => {
    return (
        <div className={styles.categoryCard}>
            <H3 textColor="white">Контрольная работа 2 — 5 заданий</H3>
            <Text size="small" textType="text" textColor="white" extraclass={styles.categoryCard__description}>
                Неопределенный интеграл, сходимость, площадь фигуры, координаты центра тяжести.
            </Text>
            <div className={styles.categoryCard__links}>
                <Link to={"/"} className={`${styles.categoryCard__link} ${styles.categoryCard__variantsCount}`}>25 вариантов</Link>
                <Link to={"/"} className={`${styles.categoryCard__link} ${styles.categoryCard__allVariants}`}>
                    К списку вариантов
                </Link>
            </div>
        </div>
    );
};
