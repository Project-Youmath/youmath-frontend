import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";
import { ErrorPageIcon } from "../../components/ui/icons/error-page-icon";
import { H2 } from "../../components/ui/typography/h2/h2";
import { ArrowRightSmallIcon } from "../../components/ui/icons/arrow-right-small-icon";
import { startPage } from "../../data/ constants";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.error_page}>
      <H2>К сожалению, этой страницы не существует.</H2>
      <ErrorPageIcon />
      <button
        onClick={() => navigate(startPage)}
        className={styles.error_page_button}
      >
        Перейти на главную
        <ArrowRightSmallIcon />
      </button>
    </section>
  );
};
export default ErrorPage;
