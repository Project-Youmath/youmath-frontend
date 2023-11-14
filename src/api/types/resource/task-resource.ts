export interface TaskResource {
  description: string;
  file?: null;
  id: number;
  read_counter: number;
  subtitle: string | null;
  title: string;
  section?: {
    id: number;
    title: string;
    subtitle: string | null;
  };
  subsection?: {
    id: number;
    title: string;
    subtitle: string | null;
  } | null;
}
