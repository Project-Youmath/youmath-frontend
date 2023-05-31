import { SearchSection } from "../../components/features/search-section";
import { PopularTaskSection } from "../../components/features/popular-task-section";
import { PopularCategorySection } from "../../components/features/popular-category-section";

export const MainPage = () => {
  return (
    <>
      <SearchSection />
      <PopularTaskSection />
      <PopularCategorySection />
    </>
  );
};
