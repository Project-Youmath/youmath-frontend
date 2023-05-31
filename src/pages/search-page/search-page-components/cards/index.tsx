import { useAppSelector } from "../../../../store/hooks/use-app-selector";

const SearchPageCards = () => {
  const { works } = useAppSelector((state) => state.searchReducer);
  return (
    <>
      {works.map((work: any) => (
        <div key={work.title + work.id}>{work.title}</div>
      ))}
    </>
  );
};
export default SearchPageCards;
