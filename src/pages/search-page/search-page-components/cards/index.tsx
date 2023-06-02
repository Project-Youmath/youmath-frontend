import { useAppSelector } from "../../../../store/hooks/use-app-selector";

const SearchPageCards = () => {
  const { tasks } = useAppSelector((state) => state.getTasksReducer);
  return (
    <>
      {tasks.map((task: any) => (
        <div key={task.title + task.id}>{task.title}</div>
      ))}
    </>
  );
};
export default SearchPageCards;