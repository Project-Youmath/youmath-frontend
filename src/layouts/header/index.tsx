import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import { HeaderNav } from "./components/header-nav/header-nav";
import { Link, useLocation } from "react-router-dom";
import { startPage } from "../../data/ constants";
import { SearchInput } from "../../components/search-input/search-input";
import { H1 } from "../../components/ui/typography/h1/h1";
import Container from "../container/insex";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={pathname === startPage ? styles.mainHeader : styles.header}
    >
      <Container>
        <section className={styles.header__content}>
          <div className={pathname === startPage ? styles.gradientMask : ""}>
            <div className={styles.header__topColumn}>
              <Link to={startPage}>
                <img className={styles.logo} src={logo} alt="Логотип YouMath" />
              </Link>
              {pathname !== startPage && (
                <div className={styles.search}>
                  <SearchInput />
                </div>
              )}
              <HeaderNav />
            </div>
          </div>

          {pathname === startPage && (
            <>
              <div className={styles.header__title}>
                <H1>Примеры решения задач по высшей математике</H1>
              </div>
              <div className={styles.header__description}>
                Не думай — качай, типовик — сдавай!
              </div>
            </>
          )}
          {pathname === startPage && (
            <div className={styles.search}>
              <SearchInput />
            </div>
          )}
        </section>
      </Container>
    </header>
  );
};
export default Header;
