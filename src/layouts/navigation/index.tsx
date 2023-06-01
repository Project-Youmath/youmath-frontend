import styles from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ArrowForwardIcon } from "../../components/ui/icons/arrow-forward-icon";
import { getLinkPatch, gеtLinkTitle } from "../../utils/nav-links-metod";
import { useAppSelector } from "../../store/hooks/use-app-selector";

const Navigation = () => {
  const { category } = useAppSelector((state) => state.categoryReducer);
  const { pathname } = useLocation();
  const navigationPages = pathname.split("/");

  return (
    <section className={styles.navigation}>
      {navigationPages.map((navigationPage, i) => (
        <Link
          key={navigationPage + i}
          className={styles.navigation__link}
          to={getLinkPatch(i, navigationPage, pathname)}
        >
          <span>{gеtLinkTitle(i, navigationPage, category?.title ?? "")}</span>
          <ArrowForwardIcon />
        </Link>
      ))}
    </section>
  );
};
export default Navigation;
