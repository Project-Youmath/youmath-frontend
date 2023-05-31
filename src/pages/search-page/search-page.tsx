import Loader from "../../components/Loader";
import SearchPageTitle from "../../components/features/search-page-components/title";
import SearchPageCards from "../../components/features/search-page-components/cards";
import NothingFoundCard from "../../components/features/search-page-components/nothing-found-card";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { searchThunk } from "../../store/thunks";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";
import { searchVisibleActions } from "../../store/reducer/search-visibility-reducer";
import { searchActions } from "../../store/reducer/search-reducer";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoading, query, works } = useAppSelector(
    (state) => state.searchReducer
  );
  useEffect(() => {
    dispatch(searchVisibleActions.changeVisible(false));
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section style={{ width: "80%", margin: "auto" }}>
          <SearchPageTitle />
          {works.length ? <SearchPageCards /> : <NothingFoundCard />}
        </section>
      )}
    </>
  );
};
