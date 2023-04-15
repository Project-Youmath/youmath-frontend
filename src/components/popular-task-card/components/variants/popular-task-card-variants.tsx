import styles from './popular-task-card-varians.module.scss';
import {Text} from "../../../../ui/typography/text/text";
import {Link} from "react-router-dom";
import {FC} from "react";

interface PopularTaskCardVariantsProps {
    extraClass?: string;
}

export const PopularTaskCardVariants:FC<PopularTaskCardVariantsProps> = ({extraClass}) => {
    return (
        <div className={extraClass ?`${styles.popularTaskCardVariants} ${extraClass}` : styles.popularTaskCardVariants}>
            <Text size="large" textType="text" textColor="white">Варианты</Text>
            <div className={styles.popularTaskCardVariants__variants}>
                <Link to={"/"} className={styles.popularTaskCardVariants__variantLink} >1</Link>
                <Link to={"/"} className={styles.popularTaskCardVariants__variantLink} >2</Link>
                <Link to={"/"} className={styles.popularTaskCardVariants__variantLink} >3</Link>
            </div>
        </div>
    );
};
