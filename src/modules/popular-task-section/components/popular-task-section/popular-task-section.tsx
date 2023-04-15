import styles from './popular-task-section.module.scss';
import {H2} from "../../../../ui/typography/h2/h2";
import {PopularTaskCard} from "../../../../components/popular-task-card";

export const PopularTaskSection = () => {
    return (
        <div className={styles.popularTaskSection}>
            <div className={styles.popularTaskSection__content}>
                <H2>Популярные задачи</H2>
                <div className={styles.popularTaskSection__taskList}>
                    <PopularTaskCard/>
                    <PopularTaskCard/>
                    <PopularTaskCard/>
                </div>
            </div>
        </div>
    );
};
