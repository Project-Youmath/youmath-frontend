import styles from './popular-task-card-external-info.module.scss';
import {Text} from "../../../../ui/typography/text/text";
import {Link} from "react-router-dom";
import {useMatchMedia} from "../../../../hooks/use-match-media";
import {PopularTaskCardVariants} from "../variants/popular-task-card-variants";

export const PopularTaskCardExternalInfo = () => {
    const isVariantVisible = useMatchMedia("(max-width: 1200px)")

    return (
        <div className={styles.popularTaskCardExternalInfo}>
            <Text size="small" textType="text" textColor="white">
                Типовой расчет по высшей математике М.А. Евдокимова, С.Г. Афанасьева. 10 задач для студентов 1 и 2 курса гуманитарного факультета 1. Определители 2 и 3 порядка.Основные свойства, минор и алгебраическое дополнение.Система линейных уравнений. Метод Крамера...
            </Text>
            <Link className={styles.popularTaskCardExternalInfo__link} to={"/"}>Подробнее...</Link>
            {isVariantVisible && <PopularTaskCardVariants extraClass={styles.popularTaskCardExternalInfo__variants}/>}
        </div>
    );
};
