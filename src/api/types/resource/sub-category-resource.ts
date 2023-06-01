export interface SubCategoryResource {
    id: number;
    title: string;
    description: string;
    read_counter: number;

    popular_articles: any[];
}