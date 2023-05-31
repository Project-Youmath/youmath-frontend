import Loader from "../../components/Loader";
import Category from "../../components/features/categories-page-components/Category";
import { H2 } from "../../components/ui/typography/h2/h2";
import { useAppSelector } from "../../hooks/use-app-selector";

export const CategoriesPage = () => {
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
          <Category key={category.title + category.id} category={category} />
        ))
      )}
    </section>
  );
};
