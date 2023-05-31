import AboutPageContent from "../../components/features/about-page-components/content";
import { SectionMenu } from "../../components/features/section-menu";

export const AboutPage = () => {
  return (
    <section style={{ display: "flex", width: "80%", margin: "auto" }}>
      <SectionMenu /> <AboutPageContent />
    </section>
  );
};
