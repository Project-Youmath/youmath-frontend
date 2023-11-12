import SectionSubcategory from "./subcategory-section";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { useEffect } from "react";
import { getSubcategoryThunk, getTasksThunk } from "../../store/thunks";
import SectionPage from "../../layouts/section-page";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import Loader from "../../components/Loader";

const SubcategoryPage = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const { subcategoryId } = useParams();
  const { isLoading } = useAppSelector((state) => state.getTasksReducer);

  useEffect(() => {
    dispatch(getSubcategoryThunk(subcategoryId ?? ""));
    dispatch(getTasksThunk(search));
  }, [dispatch, subcategoryId, search]);
  return (
    <SectionPage>{isLoading ? <Loader /> : <SectionSubcategory />}</SectionPage>
  );
};
export default SubcategoryPage;
