import styles from "./index.module.scss";
import Loader from "../../components/loader";
import SearchPageTitle from "./search-page-components/title";
import SearchPageCards from "./search-page-components/cards";
import NothingFoundCard from "./search-page-components/nothing-found-card";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { searchActions } from "../../store/slices/search-slice";
import { ButtonUp } from "../../components/ui/icons/button-up";
const SearchPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const {
    isLoading,
    countTasks,
    countCategories,
    countSubcategories,
    lengthCategories,
    lengthSubcategories,
    lengthTasks,
  } = useAppSelector((state) => state.searchReducer);
  const [scroll, setScroll] = useState(false);
  const conditionsRef = useRef({
    isLoading,
    loadFull: false,
    offset: 0,
    loadMore: false,
  });

  const fetchSearch = useCallback(() => {
    dispatch(
      searchTasksThunk({
        query: location.search,
        offset: conditionsRef.current.offset,
      })
    );
    dispatch(
      searchSubcategoriesThunk({
        query: location.search,
        offset: conditionsRef.current.offset,
      })
    );
    dispatch(
      searchCategoriesThunk({
        query: location.search,
        offset: conditionsRef.current.offset,
      })
    );
  }, [dispatch, location.search]);

  useEffect(() => {
    conditionsRef.current.offset = 0;
    dispatch(searchActions.searchReset());
    fetchSearch();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.search]); // eslint-disable-line

  useEffect(() => {
    if (!conditionsRef.current.loadMore) {
      conditionsRef.current = {
        isLoading,
        loadFull:
          lengthCategories + lengthSubcategories + lengthTasks ===
          countCategories + countSubcategories + countTasks,
        offset: conditionsRef.current.offset,
        loadMore: true,
      };
      if (!conditionsRef.current.isLoading && !conditionsRef.current.loadFull) {
        conditionsRef.current.offset++;
        fetchSearch();
      }
      setTimeout(() => (conditionsRef.current.loadMore = false), 300);
    }
  }, [scroll]); // eslint-disable-line

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setScroll((prevScroll) => !prevScroll);
    }
  };

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
        <ButtonUp classname={styles.ButtonUp} />
      </>
    </Container>
  );
};
export default SearchPage;
