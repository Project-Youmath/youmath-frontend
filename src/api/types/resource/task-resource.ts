import {CategoryResource} from "./category-resource";
import {SubCategoryResource} from "./sub-category-resource";

export interface TaskResource {
    id: number;
    title: string;
    description: string;
    file: string | null;
    read_counter: number;

    section: CategoryResource;
    subCategory: SubCategoryResource;
}