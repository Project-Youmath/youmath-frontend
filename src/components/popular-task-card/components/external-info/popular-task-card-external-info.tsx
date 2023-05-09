import styles from './popular-task-card-external-info.module.scss';
import {Text} from "../../../../ui/typography/text/text";
import {Link} from "react-router-dom";
import {useMatchMedia} from "../../../../hooks/use-match-media";
import {PopularTaskCardVariants} from "../variants/popular-task-card-variants";
import {CategoryResource} from "../../../../api/types/resource/category-resource";
import {FC} from "react";

interface PopularTaskCardExternalInfoProps {
    category: CategoryResource;
}

export const PopularTaskCardExternalInfo:FC<PopularTaskCardExternalInfoProps> = ({category}) => {
    const isVariantVisible = useMatchMedia("(max-width: 1200px)")

    return (
        <div className={styles.popularTaskCardExternalInfo}>
            <Text size="small" textType="text" textColor="white">
                {category.description}
            </Text>
            <Link className={styles.popularTaskCardExternalInfo__link} to={`/category/${category.id}`}>Подробнее...</Link>
            {isVariantVisible && <PopularTaskCardVariants extraClass={styles.popularTaskCardExternalInfo__variants}/>}
        </div>
    );
};
