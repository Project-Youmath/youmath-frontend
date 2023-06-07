import { CategoryResource } from "../resource/category-resource";
import { SubcategoryResource } from "../resource/subcategory-resource";
import { TaskResource } from "../resource/task-resource";
export type SearchResultResponse =
  | TaskResource[]
  | SubcategoryResource[]
  | CategoryResource[];
export type SearchResponse = {
  count: number;
  next: null;
  previous: null;
  results: SearchResultResponse;
};
