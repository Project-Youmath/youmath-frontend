import styles from "./index.module.scss";

import Container from "../../layouts/container";
import Navigation from "../../layouts/navigation";
import { SectionMenu } from "../../layouts/menu";
import { CategorySectionContent } from "./components/content";

const CategoryPage = () => {
  return (
    <Container>
      <>
        <Navigation />
        <section className={styles.section}>
          <SectionMenu />
          <CategorySectionContent />
        </section>
      </>
    </Container>
  );
};
export default CategoryPage;
