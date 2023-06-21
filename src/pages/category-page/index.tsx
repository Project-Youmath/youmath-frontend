import { CategorySectionContent } from "./components/content";
import SectionPage from "../../layouts/section-page";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import { useEffect } from "react";
import {
  getCategoryTasksThunk,
  getCategoryThunk,
  getSubcategoriesThunk,
} from "../../store/thunks";
import Loader from "../../components/loader";

const CategoryPage = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();
  const { isLoading, category } = useAppSelector(
    (state) => state.categoryReducer
  );

  useEffect(() => {
    dispatch(getCategoryThunk(categoryId ?? ""));
  }, [dispatch, categoryId]);

  useEffect(() => {
    if (category?.subsection_exist) {
      dispatch(getSubcategoriesThunk(categoryId!));
    } else {
      dispatch(getCategoryTasksThunk(categoryId!));
    }
  }, [dispatch, categoryId, category]);
  return (
    <SectionPage>
      {isLoading ? <Loader /> : <CategorySectionContent />}
    </SectionPage>
  );
};
export default CategoryPage;
