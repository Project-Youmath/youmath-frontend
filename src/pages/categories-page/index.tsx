import Loader from "../../components/Loader";
import CategoryCard from "../../components/category-card";
import { H2 } from "../../components/ui/typography/h2/h2";
import { useAppSelector } from "../../hooks/use-app-selector";

const CategoriesPage = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.allCategoryReducer
  );

  return (
    <section style={{ width: "80%", margin: "auto" }}>
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
  );
};
export default CategoriesPage;
