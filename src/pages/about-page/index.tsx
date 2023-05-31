import AboutPageContent from "./components/content";
import { SectionMenu } from "../../layouts/menu";

const AboutPage = () => {
  return (
    <section style={{ display: "flex", width: "80%", margin: "auto" }}>
      <SectionMenu /> <AboutPageContent />
    </section>
  );
};
export default AboutPage;
