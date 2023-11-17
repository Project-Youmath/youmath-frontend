import styles from "./index.module.scss";
import { team } from "../../../../data/ constants";
import EmployeeСard from "../employee-card";
import ButtonUpContainer from "../../../../components/ButtonUpContainer";

const AboutPageContent = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.title}>О проекте</div>
        <div className={styles.subtitle}>Цель проекта</div>
        <div className={styles.description}>
          Основная цель нашего проекта - помочь студентам лучше понимать
          математический материал и научиться решать задачи различной сложности.
          Мы собрали работы студентов Самарского Технического Университета, чтобы
          показать различные подходы к решению задач и помочь другим студентам
          понять, как решать подобные задачи.
          <br /> Наш проект доступен для всех студентов, независимо от уровня их
          знаний и опыта в математике. Мы надеемся, что наш сайт поможет студентам
          лучше понимать математический материал и создаст полезное сообщество
          студентов, которые любят математику.
        </div>
        <div className={styles.subtitle}>Команда проекта</div>
        <section className={styles.employeeCards}>
          {team.map((employeeСard, i) => (
            <EmployeeСard
              key={employeeСard.fullName + i}
              employeeСard={employeeСard}
            />
          ))}
        </section>
      </section>
      <ButtonUpContainer isFixed={false} />
    </>
  );
};
export default AboutPageContent;
