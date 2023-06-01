import styles from "./index.module.scss";
import Container from "../../layouts/container/insex";
import { SectionMenu } from "../../layouts/menu";
import Navigation from "../../layouts/navigation";
import SectionSubcategory from "./section-subcategory";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { useEffect } from "react";
import { getSubcategoryThunk, getTasksThunk } from "../../store/thunks";

const SubcategoryPage = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const { subcategoryId } = useParams();
  useEffect(() => {
    dispatch(getSubcategoryThunk(subcategoryId ?? ""));
    dispatch(getTasksThunk(search));
  }, [dispatch, subcategoryId, search]);
  return (
    <Container>
      <>
        <Navigation />
        <section className={styles.__section}>
          <SectionMenu />
          <SectionSubcategory />
        </section>
      </>
    </Container>
  );
};
export default SubcategoryPage;
