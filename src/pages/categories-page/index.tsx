import Loader from "../../components/loader";
import CategoryCard from "../../components/category-card";
import Navigation from "../../layouts/navigation";
import Container from "../../layouts/container/insex";
import { H2 } from "../../components/ui/typography/h2/h2";
import { useAppSelector } from "../../store/hooks/use-app-selector";

const CategoriesPage = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.allCategoryReducer
  );

  return (
    <Container>
      <>
        <Navigation />
        <section>
          <H2>Разделы</H2>
          {isLoading ? (
            <Loader />
          ) : (
            categories.map((category) => (
              <CategoryCard
                key={category.title + category.id}
                category={category}
              />
            ))
          )}
        </section>
      </>
    </Container>
  );
};
export default CategoriesPage;
