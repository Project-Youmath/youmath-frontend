import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import { H2 } from "../../../../components/ui/typography/h2/h2";
import { H3 } from "../../../../components/ui/typography/h3/h3";
import { useLocation } from "react-router-dom";

const SearchPageTitle = () => {
  const { search } = useLocation();
  const query = decodeURIComponent(search.slice(8));
  const { tasks } = useAppSelector((state) => state.getTasksReducer);
  return (
    <>
      {tasks.length ? (
        <>
          <H2> "Результаты поиска по запросу" </H2>
          <H3>{`«${query}»`}</H3>
        </>
      ) : (
        <H2>{`По запросу «${query}» ничего не найдено`}</H2>
      )}
    </>
  );
};
export default SearchPageTitle;
