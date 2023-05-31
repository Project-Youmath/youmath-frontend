import { SearchSection } from "./components/search-section";
import { PopularTaskSection } from "./components/popular-task-section";
import { PopularCategorySection } from "./components/popular-category-section";

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
