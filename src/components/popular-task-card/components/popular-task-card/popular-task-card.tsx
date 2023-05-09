import styles from './popular-task-card.module.scss'
import {PopularTaskCardBaseInfo} from "../base-info/popular-task-card-base-info";
import {PopularTaskCardExternalInfo} from "../external-info/popular-task-card-external-info";
import {CategoryResource} from "../../../../api/types/resource/category-resource";
import {FC} from "react";

interface PopularTaskCardProps {
    category: CategoryResource;
}

export const PopularTaskCard:FC<PopularTaskCardProps> = ({category}) => {
    return (
        <div className={styles.popularTaskCard}>
            <PopularTaskCardBaseInfo category={category}/>
            <PopularTaskCardExternalInfo category={category}/>
        </div>
    );
};
