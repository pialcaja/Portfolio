import { Tech } from "../../shared/models/tech-icon-model";

export interface Project {
  title: string;
  description: string;
  tech: Tech[];
  image: string;
  github?: string;
  demo?: string;
}
