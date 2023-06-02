import styles from "./header-search.module.scss";
import { SearchInput } from "../../../../components/search-input/search-input";

export const HeaderSearch = () => {
  return <SearchInput extraclass={styles.headerSearch} />;
};