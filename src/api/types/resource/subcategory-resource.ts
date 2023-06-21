export interface SubcategoryResource {
  id: number;
  title: string;
  description: string;
  read_counter: number;
  articles_count: number;
  popular_articles: any[];
  section: {
    id: number;
    title: string;
    subtitle: string | null;
  };
}
