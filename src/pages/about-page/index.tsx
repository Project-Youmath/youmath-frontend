import AboutPageContent from "../../components/about-page-components/content";
import { SectionMenu } from "../../components/section-menu";

const AboutPage = () => {
  return (
    <section style={{ display: "flex", width: "80%", margin: "auto" }}>
      <SectionMenu /> <AboutPageContent />
    </section>
  );
};
export default AboutPage;
