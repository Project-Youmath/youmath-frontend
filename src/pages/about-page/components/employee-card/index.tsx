import styles from "./index.module.scss";
import { FC } from "react";
import { team } from "../../../../data/ constants";
import EmployeeСardButtons from "./buttons";
interface IEmployeeСardProps {
  employeeСard: (typeof team)[0];
}
const EmployeeСard: FC<IEmployeeСardProps> = ({ employeeСard }) => {
  return (
    <section className={styles.section}>
      <img
        className={styles.avatar}
        src={employeeСard.image}
        alt="Моё изображение"
      />
      <span className={styles.fullName}>{employeeСard.fullName}</span>
      <span className={styles.jobTitle}>{employeeСard.jobTitle}</span>
      <EmployeeСardButtons employeeСard={employeeСard} />
    </section>
  );
};
export default EmployeeСard;
