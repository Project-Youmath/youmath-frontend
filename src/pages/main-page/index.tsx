import { PopularTaskSection } from "./components/popular-task-section";
import { PopularCategorySection } from "./components/popular-category-section";
import ButtonUpContainer from "../../components/ButtonUpContainer";

const MainPage = () => {
  return (
    <>
      <PopularTaskSection />
      <PopularCategorySection />
      <ButtonUpContainer isFixed={true} />
    </>
  );
};
export default MainPage;
