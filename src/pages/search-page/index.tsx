import Loader from "../../components/loader";
import SearchPageTitle from "./search-page-components/title";
import SearchPageCards from "./search-page-components/cards";
import NothingFoundCard from "./search-page-components/nothing-found-card";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getTasksThunk } from "../../store/thunks";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import Container from "../../layouts/container/insex";
import Navigation from "../../layouts/navigation";

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoading, tasks } = useAppSelector((state) => state.getTasksReducer);

  useEffect(() => {
    dispatch(getTasksThunk(location.search));
  }, [dispatch, location.search]);
  return (
    <Container>
      <>
        <Navigation />
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <SearchPageTitle />
            {tasks.length ? <SearchPageCards /> : <NothingFoundCard />}
          </section>
        )}
      </>
    </Container>
  );
};
export default SearchPage;
