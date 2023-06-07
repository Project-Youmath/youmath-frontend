import styles from "./search-input.module.scss";
import { SearchIcon } from "../ui/icons/search-icon";
import { ChangeEventHandler, FC, MouseEventHandler, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { startPage } from "../../data/ constants";
import { searchActions } from "../../store/slices/search-slice";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";

interface ISearchInputProps {
  extraclass?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  onSearchClick?: MouseEventHandler;
}

export const SearchInput: FC<ISearchInputProps> = ({ extraclass }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    dispatch(searchActions.searchReset());
    if (inputRef.current?.value) {
      const value = inputRef.current.value;
      navigate(`${startPage}search?search=${value}`);
    }
  };
  return (
    <label
      className={
        extraclass
          ? `${styles.searchInputLabel} ${extraclass}`
          : styles.searchInputLabel
      }
    >
      <input
        className={styles.searchInputLabel__input}
        ref={inputRef}
        type="text"
        placeholder={"Введите название задачи"}
        onKeyDown={handleKeyDown}
      />
      <button
        className={styles.searchInputLabel__searchButton}
        onClick={handleSearch}
      >
        <SearchIcon classname={styles.searchInputLabel__icon} />
      </button>
    </label>
  );
};
