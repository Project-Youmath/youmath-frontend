import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import { HeaderNav } from "./components/header-nav/header-nav";
import { Link, useLocation } from "react-router-dom";
import { startPage } from "../../data/ constants";
import { SearchInput } from "../../components/search-input/search-input";
import Container from "../container";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      className={pathname === startPage ? styles.mainHeader : styles.header}
    >
      <Container>
        <section className={styles.header__content}>
          <div
            className={
              pathname === startPage
                ? styles.gradientMask
                : styles.gradientMaskInactive
            }
          >
            <div className={styles.topColumn}>
              <Link className={styles.topColumn__logo} to={startPage}>
                <img src={logo} alt="Логотип YouMath" />
              </Link>
              <div
                className={`${styles.search} ${
                  pathname === startPage
                    ? styles.mainSearchTop
                    : styles.searchTop
                }`}
              >
                <SearchInput />
              </div>

              <HeaderNav />
            </div>
          </div>

          {pathname === startPage && (
            <>
              <div className={styles.title}>
                Примеры решения задач по высшей математике
              </div>
              <div className={styles.description}>
                Не думай — качай, типовик — сдавай!
              </div>
            </>
          )}

          <div
            className={`${styles.search} ${
              pathname === startPage
                ? styles.mainSearchBottom
                : styles.searchBottom
            }`}
          >
            <SearchInput />
          </div>
        </section>
      </Container>
    </header>
  );
};
export default Header;
