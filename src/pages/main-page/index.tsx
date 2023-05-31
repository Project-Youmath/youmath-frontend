import { SearchSection } from "../../components/main-page-components/search-section";
import { PopularTaskSection } from "../../components/main-page-components/popular-task-section";
import { PopularCategorySection } from "../../components/main-page-components/popular-category-section";

const MainPage = () => {
  return (
    <>
      <SearchSection />
      <PopularTaskSection />
      <PopularCategorySection />
    </>
  );
};
export default MainPage;
