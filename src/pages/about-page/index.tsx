import styles from "./index.module.scss";
import AboutPageContent from "./components/content";
import { SectionMenu } from "../../layouts/menu";
import Container from "../../layouts/container";
import Navigation from "../../layouts/navigation";

const AboutPage = () => {
  return (
    <Container>
      <>
        <Navigation />
        <section className={styles.section}>
          <SectionMenu /> <AboutPageContent />
        </section>
      </>
    </Container>
  );
};
export default AboutPage;
