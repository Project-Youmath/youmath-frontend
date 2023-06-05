import styles from "./index.module.scss";
import { team } from "../../../../data/ constants";
import { H2 } from "../../../../components/ui/typography/h2/h2";
import { H3 } from "../../../../components/ui/typography/h3/h3";
import EmployeeСard from "../employee-card";

const AboutPageContent = () => {
  return (
    <section className={styles.__section}>
      <H2>О проекте</H2>
      <H3>Цель проекта</H3>
      <p className={styles.description}>
        Основная цель нашего проекта - помочь студентам лучше понимать
        математический материал и научиться решать задачи различной сложности.
        Мы собрали работы студентов Самарского Технического Университета, чтобы
        показать различные подходы к решению задач и помочь другим студентам
        понять, как решать подобные задачи.
        <br /> Наш проект доступен для всех студентов, независимо от уровня их
        знаний и опыта в математике. Мы надеемся, что наш сайт поможет студентам
        лучше понимать математический материал и создаст полезное сообщество
        студентов, которые любят математику.
      </p>
      <H3>Команда проекта</H3>
      <section className={styles.__employeeCards}>
        {team.map((employeeСard, i) => (
          <EmployeeСard
            key={employeeСard.fullName + i}
            employeeСard={employeeСard}
          />
        ))}
      </section>
    </section>
  );
};
export default AboutPageContent;
