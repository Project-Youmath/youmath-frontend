export interface CategoryResource {
    id: number;
    title: string;
    description: string;

    popular_articles: any[];
    popular_subsections: any[];
}