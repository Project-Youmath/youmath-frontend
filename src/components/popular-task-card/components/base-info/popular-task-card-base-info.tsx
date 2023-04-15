import styles from './popular-task-card-base-info.module.scss';
import {H3} from "../../../../ui/typography/h3/h3";
import {Text} from "../../../../ui/typography/text/text";
import {PopularTaskCardVariants} from "../variants/popular-task-card-variants";
import {useMatchMedia} from "../../../../hooks/use-match-media";

export const PopularTaskCardBaseInfo = () => {
    const isVariantVisible = !useMatchMedia("(max-width: 1200px)")

    return (
        <div className={styles.popularTaskCardBaseInfo}>
            <div>
                <H3 textColor="white" decoration="underline">Высшая математика для гуманитариев</H3>
                <Text size="small" textType="text" textColor="white">М.А. Евдокимов, С.Г. Афанасьева, 2005</Text>
            </div>
            {isVariantVisible && <PopularTaskCardVariants/>}
        </div>
    );
};
