import React from 'react';
import styles from "./header-search-with-search-section.module.scss";
import {SearchInput} from "../../../search-input/search-input";
import {useAppSelector} from "../../../../hooks/use-app-selector";

export const HeaderSearchWithSearchSection = () => {
    const isSearchNotVisible = useAppSelector(state => state.searchVisibilityReducer.isVisible)

    return (
        !isSearchNotVisible ? <SearchInput extraclass={styles.headerSearchWithSearchSection}/> : null
    );
};
