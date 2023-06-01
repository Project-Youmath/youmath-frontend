import { TaskResource } from "../resource/task-resource";

export type SearchResponse = {
  count: number;
  next: null;
  previous: null;
  results: TaskResource[];
};
