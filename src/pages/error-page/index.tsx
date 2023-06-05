import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";
import { ErrorPageIcon } from "../../components/ui/icons/error-page-icon";
import { ArrowRightSmallIcon } from "../../components/ui/icons/arrow-right-small-icon";
import { startPage } from "../../data/ constants";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <span className={styles.title}>
        К сожалению, этой страницы не существует.
      </span>
      <ErrorPageIcon />
      <button onClick={() => navigate(startPage)} className={styles.button}>
        Перейти на главную
        <ArrowRightSmallIcon />
      </button>
    </section>
  );
};
export default ErrorPage;
