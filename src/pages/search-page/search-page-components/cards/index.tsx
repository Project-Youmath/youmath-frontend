import { useAppSelector } from "../../../../store/hooks/use-app-selector";

const SearchPageCards = () => {
  const { tasks, subcategories, categories, filter } = useAppSelector(
    (state) => state.searchReducer
  );
  return (
    <>
      {[0, 3].includes(filter) &&
        categories.map((category: any) => (
          <div key={category.title + category.id} style={{ fontSize: "20em" }}>
            {category.title}
          </div>
        ))}
      {[0, 2].includes(filter) &&
        subcategories.map((subcategory: any) => (
          <div
            style={{ fontSize: "20em" }}
            key={subcategory.title + subcategory.id}
          >
            {subcategory.title}
          </div>
        ))}
      {[0, 1].includes(filter) &&
        tasks.map((task: any) => (
          <div style={{ fontSize: "20em" }} key={task.title + task.id}>
            {task.title}
          </div>
        ))}
    </>
  );
};
export default SearchPageCards;
