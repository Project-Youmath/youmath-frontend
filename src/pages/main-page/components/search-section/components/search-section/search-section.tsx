import styles from "./search-section.module.scss";
import { H1 } from "../../../../../../components/ui/typography/h1/h1";
import { Text } from "../../../../../../components/ui/typography/text/text";
import { SearchInput } from "../../../../../../components/search-input/search-input";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "../../../../../../store/hooks/use-app-dispatch";
import { useEffect } from "react";
import { searchVisibleActions } from "../../../../../../store/slices/search-visibility-slice";

export const SearchSection = () => {
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({ threshold: 0.35 });

  useEffect(() => {
    dispatch(searchVisibleActions.changeVisible(inView));
    // eslint-disable-next-line
  }, [inView]);

  return (
    <section className={styles.searchSection} ref={ref}>
      <H1 extraClass={styles.searchSection__title}>
        Примеры решения задач по высшей математике
      </H1>
      <Text
        extraclass={styles.searchSection__subtitle}
        size={"small"}
        textType={"text"}
        textColor={"white"}
      >
        Не думай — качай, типовик — сдавай!
      </Text>
      <SearchInput
        extraclass={`${styles.searchSection__search} ${
          !inView && styles.searchSection__search__hidden
        }`}
      />
    </section>
  );
};
