import Loader from "../../components/loader";
import SearchPageTitle from "./search-page-components/title";
import SearchPageCards from "./search-page-components/cards";
import NothingFoundCard from "./search-page-components/nothing-found-card";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { searchThunk } from "../../store/thunks";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { searchActions } from "../../store/slices/search-slice";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import Container from "../../layouts/container/insex";
import Navigation from "../../layouts/navigation";

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoading, query, works } = useAppSelector(
    (state) => state.searchReducer
  );
  useEffect(() => {
    dispatch(
      searchActions.changeQuery(
        decodeURIComponent(location.search.substring(3))
      )
    );
  }, [dispatch, location.search]);
  useEffect(() => {
    dispatch(searchThunk(query));
  }, [dispatch, query]);
  return (
    <Container>
      <>
        <Navigation />
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <SearchPageTitle />
            {works.length ? <SearchPageCards /> : <NothingFoundCard />}
          </section>
        )}
      </>
    </Container>
  );
};
export default SearchPage;
