import styles from "./index.module.scss";
import Loader from "../../components/Loader";
import CategoryCard from "../../components/category-card";
import Navigation from "../../layouts/navigation";
import Container from "../../layouts/container";
import { useAppSelector } from "../../store/hooks/use-app-selector";

const CategoriesPage = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.allCategoryReducer
  );

  return (
    <Container>
      <>
        <Navigation />
        <section className={styles.section}>
          <div className={styles.title}>Разделы</div>
          <section className={styles.content}>
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
        </section>
      </>
    </Container>
  );
};
export default CategoriesPage;
