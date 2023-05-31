import FeedbackPageForm from "./components/form";
import { SectionMenu } from "../../layouts/menu";
import { H2 } from "../../components/ui/typography/h2/h2";

const FeedbackPage = () => {
  return (
    <section style={{ display: "flex", width: "80%", margin: "auto" }}>
      <SectionMenu />
      <section style={{ marginLeft: 24 }}>
        <H2>Связаться с нами</H2>
        <FeedbackPageForm />
      </section>
    </section>
  );
};
export default FeedbackPage;
