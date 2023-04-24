export interface PopularCategoryResource {
    id: number;
    title: string;
    description: string;
    author: string | null;
    read_counter: number;
    subsection_exist: boolean;
    subsections_count: number;
    articles_count: number;
}