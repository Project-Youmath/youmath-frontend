import styles from './section-menu.module.scss';
import {SectionMenuItem} from "../section-menu-item/section-menu-item";

export const SectionMenu = () => {
    return (
        <div className={styles.sectionMenu}>
            <SectionMenuItem>Высшая математика для гуманитариев</SectionMenuItem>
            <SectionMenuItem>Высшая математика для дистанционного обучения</SectionMenuItem>
            <SectionMenuItem>Высшая математика для заочного факультета</SectionMenuItem>
            <SectionMenuItem>Дифференциальное исчисление и его приложения</SectionMenuItem>
            <SectionMenuItem>Дифференциальные уравнения</SectionMenuItem>
            <SectionMenuItem>Дифференциальные уравнения. Ряды. Теория вероятностей</SectionMenuItem>
            <SectionMenuItem>Дифференцирование функций</SectionMenuItem>
            <SectionMenuItem>Задания для подготовки к изучению курса высшей математики</SectionMenuItem>
            <SectionMenuItem>Интеграл Римана и его приложения. Дифференциальные уравнения. Ряды</SectionMenuItem>
            <SectionMenuItem>Комплексные числа</SectionMenuItem>
            <SectionMenuItem>Комплексный анализ. Теория вероятностей</SectionMenuItem>
            <SectionMenuItem>Линейная алгебра и аналитическая геометрия</SectionMenuItem>
            <SectionMenuItem>Математика для гуманитарного образования</SectionMenuItem>
            <SectionMenuItem>Математическая статистика</SectionMenuItem>
        </div>
    );
};
