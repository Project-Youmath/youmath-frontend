import styles from './popular-category-card.module.scss';
import {Text} from "../../ui/typography/text/text";
import {RightArrowIcon} from "../../ui/icons/right-arrow-icon";
import {FC} from "react";

interface PopularCategoryCardProps {
    title: string;
    author?: string;
}

export const PopularCategoryCard:FC<PopularCategoryCardProps> = ({title, author}) => {
    return (
        <div className={styles.popularCategoryCard}>
            <div className={styles.popularCategoryCard__info}>
                <Text size="large" textType="text" textColor="black" >{title}</Text>
                {author && <Text size="small" textType="text" textColor="dim">{author}</Text>}
            </div>
            <RightArrowIcon classname={styles.popularCategoryCard__arrow}/>
        </div>
    );
};
