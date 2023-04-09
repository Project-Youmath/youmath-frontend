import styles from './search-input.module.scss';
import {SearchIcon} from "../../ui/icons/search-icon";
import {ChangeEventHandler, FC, MouseEventHandler} from "react";

interface ISearchInputProps {
    extraclass?: string;

    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;

    onSearchClick?: MouseEventHandler;
}

export const SearchInput:FC<ISearchInputProps> = ({extraclass, onChange, value, onSearchClick}) => {
    return (
        <label className={extraclass ? `${styles.searchInputLabel} ${extraclass}`: styles.searchInputLabel}>
            <input className={styles.searchInputLabel__input} type="text" placeholder={"Введите название задачи"} onChange={onChange} value={value}/>
            <button className={styles.searchInputLabel__searchButton} onClick={onSearchClick}>
                <SearchIcon classname={styles.searchInputLabel__icon}/>
            </button>
        </label>
    );
};
