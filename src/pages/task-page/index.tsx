import styles from "./index.module.scss";
import Navigation from "../../layouts/navigation";
import Container from "../../layouts/container/insex";
import { SectionMenu } from "../../layouts/menu";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { useEffect } from "react";
import { getTaskThunk } from "../../store/thunks";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import Loader from "../../components/loader";
import TaskSection from "./task-section";

const TaskPage = () => {
  const { isLoading } = useAppSelector((state) => state.getTaskReducer);
  const dispatch = useAppDispatch();
  const { taskId } = useParams();
  useEffect(() => {
    dispatch(getTaskThunk(taskId ?? ""));
  }, [dispatch, taskId]);

  return (
    <Container>
      <>
        <Navigation />
        <section className={styles.__section}>
          <SectionMenu />
          {isLoading ? <Loader /> : <TaskSection />}
        </section>
      </>
    </Container>
  );
};
export default TaskPage;
