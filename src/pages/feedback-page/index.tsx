import FeedbackPageForm from "./components/form";
import { H2 } from "../../components/ui/typography/h2/h2";
import SectionPage from "../../layouts/section-page";

const FeedbackPage = () => {
  return (
    <SectionPage>
      <>
        <H2>Связаться с нами</H2>
        <FeedbackPageForm />
      </>
    </SectionPage>
  );
};
export default FeedbackPage;
