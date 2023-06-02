import FeedbackPageForm from "./components/form";
import { SectionMenu } from "../../layouts/menu";
import { H2 } from "../../components/ui/typography/h2/h2";
import Container from "../../layouts/container";
import Navigation from "../../layouts/navigation";

const FeedbackPage = () => {
  return (
    <Container>
      <>
        <Navigation />
        <section style={{ display: "flex" }}>
          <SectionMenu />
          <section style={{ marginLeft: 24 }}>
            <H2>Связаться с нами</H2>
            <FeedbackPageForm />
          </section>
        </section>
      </>
    </Container>
  );
};
export default FeedbackPage;
