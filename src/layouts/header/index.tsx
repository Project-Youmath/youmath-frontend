import styles from "./index.module.scss";
import logo from "../../assets/images/logo.png";
import { HeaderNav } from "./components/header-nav";
import { Link, useLocation } from "react-router-dom";
import { startPage } from "../../data/ constants";
import { SearchInput } from "../../components/search-input/search-input";
import Container from "../container";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      className={
        [startPage, startPage.slice(0, -1)].includes(pathname)
          ? styles.mainHeader
          : styles.header
      }
    >
      <Container>
        <section className={styles.header__content}>
          <div
            className={
              [startPage, startPage.slice(0, -1)].includes(pathname)
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
                  [startPage, startPage.slice(0, -1)].includes(pathname)
                    ? styles.mainSearchTop
                    : styles.searchTop
                }`}
              >
                <SearchInput />
              </div>

              <HeaderNav />
            </div>
          </div>

          {[startPage, startPage.slice(0, -1)].includes(pathname) && (
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
              [startPage, startPage.slice(0, -1)].includes(pathname)
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
