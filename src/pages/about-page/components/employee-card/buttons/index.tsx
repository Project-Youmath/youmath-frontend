import styles from "./index.module.scss";
import { FC } from "react";
import { team } from "../../../../../data/ constants";
import { TelegramIcon } from "../../../../../components/ui/icons/telegram-icon";
import { GitIcon } from "../../../../../components/ui/icons/git-icon";
import { LinkdnIcon } from "../../../../../components/ui/icons/linkdn-icon";
import { PhoneIcon } from "../../../../../components/ui/icons/phone-icon";
import { BehanceIcon } from "../../../../../components/ui/icons/behance-icon";
interface IEmployeeСardProps {
  employeeСard: (typeof team)[0];
}

const EmployeeСardButtons: FC<IEmployeeСardProps> = ({ employeeСard }) => {
  return (
    <section className={styles.section}>
      {employeeСard.resume ? (
        <a
          className={`${styles.buttons} ${styles.buttons_resume}`}
          href={employeeСard.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Резюме
        </a>
      ) : (
        ""
      )}
      {employeeСard.phone ? (
        <a
          className={`${styles.buttons} ${styles.buttons_links}`}
          href={employeeСard.phone}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhoneIcon />
        </a>
      ) : (
        ""
      )}
      {employeeСard.telegram ? (
        <a
          className={`${styles.buttons} ${styles.buttons_links}`}
          href={employeeСard.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
        </a>
      ) : (
        ""
      )}
      {employeeСard.linkedin ? (
        <a
          className={`${styles.buttons} ${styles.buttons_links}`}
          href={employeeСard.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkdnIcon />
        </a>
      ) : (
        ""
      )}
      {employeeСard.gitHub ? (
        <a
          className={`${styles.buttons} ${styles.buttons_links}`}
          href={employeeСard.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitIcon />
        </a>
      ) : (
        ""
      )}
      {employeeСard.Behance ? (
        <a
          className={`${styles.buttons} ${styles.buttons_links}`}
          href={employeeСard.Behance}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BehanceIcon />
        </a>
      ) : (
        ""
      )}
    </section>
  );
};
export default EmployeeСardButtons;
