import styles from './popular-category-section.module.scss';
import {H2} from "../../../../ui/typography/h2/h2";
import {PopularCategoryCard} from "../../../../components/popular-category-card/popular-category-card";
import {Link} from "react-router-dom";
import {RightArrowIcon} from "../../../../ui/icons/right-arrow-icon";

export const PopularCategorySection = () => {
    return (
        <section className={styles.popularCategorySection}>
            <H2>Популярные разделы</H2>
            <div className={styles.popularCategorySection__categories}>
                <PopularCategoryCard title={"Комплексные числа"}/>
                <PopularCategoryCard title={"Высшая математика для гуманитариев "} author={"М.А. Евдокимов, С.Г. Афанасьева, 2005"}/>
                <PopularCategoryCard title={"Математическое программирование и исследование операций"} author={"М.А. Евдокимов, 2012"}/>
                <PopularCategoryCard title={"Дифференцирование функций "} author={"С.Н. Кубышкина, Е.Ю. Арланова, 2015"}/>
                <PopularCategoryCard title={"Теория вероятностей"}/>
                <PopularCategoryCard title={"Дифференциальные уравнения"}/>
                <PopularCategoryCard title={"Интеграл Римана и его приложения. Дифференциальные уравнения. Ряды"}/>
                <PopularCategoryCard title={"Дифференциальные уравнения. Ряды. Теория вероятностей"} author={"С.Г. Корнфельд, Н.Н. Попов, 2014"}/>
            </div>
            <Link to={"/"} className={styles.popularCategorySection__allCategoriesLink}>
                Смотреть все <RightArrowIcon classname={styles.popularCategorySection__allCategoriesLinkICon}/>
            </Link>
        </section>
    );
};
