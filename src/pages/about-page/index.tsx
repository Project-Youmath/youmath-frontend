import AboutPageContent from "./components/content";
import { SectionMenu } from "../../layouts/menu";
import Container from "../../layouts/container/insex";
import Navigation from "../../layouts/navigation";

const AboutPage = () => {
  return (
    <Container>
      <>
        <Navigation />
        <section style={{ display: "flex" }}>
          <SectionMenu /> <AboutPageContent />
        </section>
      </>
    </Container>
  );
};
export default AboutPage;
