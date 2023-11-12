import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { useEffect } from "react";
import { getTaskThunk } from "../../store/thunks";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import Loader from "../../components/Loader";
import TaskSection from "./task-section";
import SectionPage from "../../layouts/section-page";

const TaskPage = () => {
  const { isLoading } = useAppSelector((state) => state.getTaskReducer);
  const dispatch = useAppDispatch();
  const { taskId } = useParams();
  useEffect(() => {
    dispatch(getTaskThunk(taskId ?? ""));
  }, [dispatch, taskId]);

  return <SectionPage>{isLoading ? <Loader /> : <TaskSection />}</SectionPage>;
};
export default TaskPage;
