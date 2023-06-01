export interface CategoryResource {
  id: number;
  title: string;
  description: string;
  author: string | null;
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
  articles: {
    id: number;
    title: string;
    subtitle: string | null;
    description: string;
    read_counter: number;
  }[];
}
