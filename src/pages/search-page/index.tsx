import styles from "./index.module.scss";
import Loader from "../../components/loader";
import SearchPageTitle from "./search-page-components/title";
import SearchPageCards from "./search-page-components/cards";
import NothingFoundCard from "./search-page-components/nothing-found-card";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  searchCategoriesThunk,
  searchSubcategoriesThunk,
  searchTasksThunk,
} from "../../store/thunks";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import Container from "../../layouts/container";
import Navigation from "../../layouts/navigation";
import SearchFilter from "./search-page-components/filter";

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoading, countTasks, countCategories, countSubcategories } =
    useAppSelector((state) => state.searchReducer);

  useEffect(() => {
    dispatch(searchTasksThunk(location.search));
    dispatch(searchSubcategoriesThunk(location.search));
    dispatch(searchCategoriesThunk(location.search));
  }, [dispatch, location.search]);
  return (
    <Container>
      <>
        <Navigation />

        {isLoading ? (
          <Loader />
        ) : (
          <section className={styles.section}>
            <SearchPageTitle />

            {countTasks + countCategories + countSubcategories !== 0 ? (
              <>
                <SearchFilter />
                <SearchPageCards />
              </>
            ) : (
              <NothingFoundCard />
            )}
          </section>
        )}
      </>
    </Container>
  );
};
export default SearchPage;
