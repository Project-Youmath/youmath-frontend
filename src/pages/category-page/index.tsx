import Container from "../../layouts/container/insex";
import Navigation from "../../layouts/navigation";
import { CategorySection } from "./components/category-section/category-section";

const CategoryPage = () => {
  return (
    <Container>
      <>
        <Navigation />
        <CategorySection />
      </>
    </Container>
  );
};
export default CategoryPage;
