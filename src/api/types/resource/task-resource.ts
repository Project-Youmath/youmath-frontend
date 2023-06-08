export interface TaskResource {
  description: string;
  file?: null;
  id: number;
  read_counter: number;
  subtitle: string | null;
  title: string;
  section_title?: string;
  section_id?: number;
  subsection_title?: string | null;
  subsection_id?: number | null;
}
