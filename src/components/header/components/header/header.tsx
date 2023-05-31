import styles from "./header.module.scss";
import logo from "../../../../assets/images/logo.png";
import { HeaderNav } from "../header-nav/header-nav";
import { HeaderSearchWithSearchSection } from "../header-search-with-search-section/header-search-with-search-section";
import { FC } from "react";
import { HeaderSearch } from "../header-search/header-search";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {
  isPageHaveSearchSection: boolean;
}

export const Header: FC<IHeaderProps> = ({ isPageHaveSearchSection }) => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img
          className={styles.logo}
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="Логотип YouMath"
        />
        {isPageHaveSearchSection ? (
          <HeaderSearchWithSearchSection />
        ) : (
          <HeaderSearch />
        )}
        <HeaderNav />
      </div>
    </header>
  );
};
