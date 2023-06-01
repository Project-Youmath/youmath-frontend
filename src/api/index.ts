import axios from "axios";
import { GetPopularCategoryResponse } from "./types/response/get-popular-category-response";
import { CategoryResource } from "./types/resource/category-resource";
import { GetPopularSubCategoryResponse } from "./types/response/get-popular-sub-category-response";
import { SubCategoryResource } from "./types/resource/sub-category-resource";
import { SearchResponse } from "./types/response/search-response";
import { TaskResource } from "./types/resource/task-resource";
import { GetAllCategoriesResponse } from "./types/response/get-all-categories-response";

const BASEURL = "https://youmath.ru/api/v1";

// search -- v1/articles
// getTask -- v1/articles/{id}
// popularCategory -- v1/sections/popular
// getCategory -- v1/section/{id}
// popularSubCategory -- v1/subsections/popular
// getSubCategory -- v1/subsections/{id}

const createReguest = async (endpoint: string, params?: any) => {
  const data = await axios.get(`${BASEURL}${endpoint}`, {
    params: { ...params },
  });
  return data.data.results ?? data.data;
};

export const api = {
  search(query: string): Promise<SearchResponse> {
    return createReguest(`/articles/?search=${query}`);
  },

  getTask(taskId: number): Promise<TaskResource> {
    return createReguest(`/articles/${taskId}`);
  },

  getPopularCategory(): Promise<GetPopularCategoryResponse> {
    return createReguest(`/sections/popular`);
  },

  getAllCategories(): Promise<GetAllCategoriesResponse> {
    return createReguest(`/sections`);
  },

  getCategory(categoryId: string): Promise<CategoryResource> {
    return createReguest(`/sections/${categoryId}`);
  },

  getPopularSubCategory(): Promise<GetPopularSubCategoryResponse> {
    return createReguest(`/subsections/popular`);
  },

  getSubCategory(subCategoryId: number): Promise<SubCategoryResource> {
    return createReguest(`/subsections/${subCategoryId}`);
  },
};
