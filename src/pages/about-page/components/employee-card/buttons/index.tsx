import styles from "./index.module.scss";
import { FC } from "react";
import { team } from "../../../../../data/ constants";
import { TelegramIcon } from "../../../../../components/ui/icons/telegram-icon";
import { GitIcon } from "../../../../../components/ui/icons/git-icon";
import { LinkdnIcon } from "../../../../../components/ui/icons/linkdn-icon";
interface IEmployeeСardProps {
  employeeСard: (typeof team)[0];
}

const EmployeeСardButtons: FC<IEmployeeСardProps> = ({ employeeСard }) => {
  return (
    <section style={{ display: "flex", gap: 8 }}>
      <a
        className={`${styles.buttons} ${styles.buttons_resume}`}
        href={employeeСard.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Резюме
      </a>
      <a
        className={`${styles.buttons} ${styles.buttons_links}`}
        href={employeeСard.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </a>
      <a
        className={`${styles.buttons} ${styles.buttons_links}`}
        href={employeeСard.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkdnIcon />
      </a>
      <a
        className={`${styles.buttons} ${styles.buttons_links}`}
        href={employeeСard.gitHub}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitIcon />
      </a>
    </section>
  );
};
export default EmployeeСardButtons;
