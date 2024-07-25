// Defines the structure of a Project object
export interface Project {
  id: number;
  projects_id: ProjectInfomation;
  team_id: number;
}

// Defines the structure of detailed project information
export interface ProjectInfomation {
  background?: string | null;
  created_on?: string | null;
  description?: string | null;
  description_full?: string | null;
  id: number;
  maintag?: string | null;
  name: string;
  order?: number | null;
  owner?: string | null;
  past?: string | null;
  progress?: string | null;
  project_link?: string | null;
  results?: string | null;
  slug?: string | null;
  status?: string | null;
  subtag?: string | null;
  main_picture_2020?: string | null;
  picture?: string | null;
  location?: string | null;
  partners?: string | null;
  more_about?: MoreAbout[];
  project_team?: number[];
  gallery?: string[] | null;
}

// Defines the structure of additional information about the project
export interface MoreAbout {
  title: string;
  link: string;
}
