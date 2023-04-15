import styles from './popular-task-card.module.scss'
import {PopularTaskCardBaseInfo} from "../base-info/popular-task-card-base-info";
import {PopularTaskCardExternalInfo} from "../external-info/popular-task-card-external-info";

export const PopularTaskCard = () => {
    return (
        <div className={styles.popularTaskCard}>
            <PopularTaskCardBaseInfo/>
            <PopularTaskCardExternalInfo/>
        </div>
    );
};
