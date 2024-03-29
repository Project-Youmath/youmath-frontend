import Container from "../container";
import { SectionMenu } from "../menu";
import Navigation from "../navigation";
import SectionContent from "../section-content";
import styles from "./index.module.scss";
import { FC } from "react";
interface IContainerProps {
  children: JSX.Element;
}
const SectionPage: FC<IContainerProps> = ({ children }) => {
  return (
    <Container>
      <>
        <Navigation />
        <section className={styles.section}>
          <SectionMenu />
          <SectionContent>{children}</SectionContent>
        </section>
      </>
    </Container>
  );
};
export default SectionPage;
