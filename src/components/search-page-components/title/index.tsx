import { useAppSelector } from "../../../hooks/use-app-selector";
import { H2 } from "../../ui/typography/h2/h2";
import { H3 } from "../../ui/typography/h3/h3";

const SearchPageTitle = () => {
  const { query, works } = useAppSelector((state) => state.searchReducer);
  return (
    <>
      {works.length ? (
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
