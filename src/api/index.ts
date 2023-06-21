import axios from "axios";
import { GetPopularCategoryResponse } from "./types/response/get-popular-category-response";
import { CategoryResource } from "./types/resource/category-resource";
import { SubcategoryResource } from "./types/resource/subcategory-resource";
import { TaskResource } from "./types/resource/task-resource";
import { GetAllCategoriesResponse } from "./types/response/get-all-categories-response";
import { SearchResponse } from "./types/response/search-response";

const BASEURL = "https://youmath.ru/api/v1";

// search -- v1/articles
// getTask -- v1/articles/{id}
// popularCategory -- v1/sections/popular
// getCategory -- v1/section/{id}
// popularSubCategory -- v1/subsections/popular
// getSubCategory -- v1/subsections/{id}

const createRequest = async (endpoint: string, params?: any) => {
  const data = await axios.get(`${BASEURL}${endpoint}`, {
    params: { ...params },
  });
  return data.data;
};

export const api = {
  getTasks(query: string): Promise<SearchResponse> {
    return createRequest(`/articles/${query}`);
  },
  getCategoryTasks(sectionId: string): Promise<SearchResponse> {
    return createRequest(`/articles/?section=${sectionId}`);
  },
  getSubcategoryTasks(subsectionId: string): Promise<SearchResponse> {
    return createRequest(`/articles/?subsection=${subsectionId}`);
  },
  searchSubcategories(query: string, offset = 0): Promise<SearchResponse> {
    return createRequest(
      `/subsections/${query}&limit=10&offset=${offset * 10}`
    );
  },
  searchCategories(query: string, offset = 0): Promise<SearchResponse> {
    return createRequest(`/sections/${query}&limit=10&offset=${offset * 10}`);
  },
  searchTasks(query: string, offset = 0): Promise<SearchResponse> {
    return createRequest(`/articles/${query}&limit=10&offset=${offset * 10}`);
  },

  getTask(taskId: string): Promise<TaskResource> {
    return createRequest(`/articles/${taskId}`);
  },

  getPopularCategory(): Promise<GetPopularCategoryResponse> {
    return createRequest(`/sections/popular`);
  },

  getAllCategories(): Promise<GetAllCategoriesResponse> {
    return createRequest(`/sections`);
  },

  getCategory(categoryId: string): Promise<CategoryResource> {
    return createRequest(`/sections/${categoryId}`);
  },

  getSubcategories(sectionId: string): Promise<SubcategoryResource> {
    return createRequest(`/subsections/?section=${sectionId}`);
  },

  getSubcategory(subcategoryId: string): Promise<SubcategoryResource> {
    return createRequest(`/subsections/${subcategoryId}`);
  },
};
