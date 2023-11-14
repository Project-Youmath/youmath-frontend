type ArticleArray = {
  id: number;
  title: string;
  subtitle: string | null;
  description: string;
  read_counter: number;
}[];
export interface CategoryResource {
  id: number;
  title: string;
  description: string;
  subtitle: string | null;
  read_counter: number;
  subsection_exist: boolean;
  subsections_count: number;
  articles_count: number;
  subsections?: {
    id: number;
    title: string;
    description: string | null;
    read_counter: number;
  }[];
  articles: ArticleArray;
  popular_articles: ArticleArray;
}
