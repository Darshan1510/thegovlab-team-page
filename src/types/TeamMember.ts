import { Project } from "./Project";

// Defines the structure of a TeamMember object
export interface TeamMember {
  id: number;
  name: string;
  bio_short?: string | null;
  title?: string | null;
  picture_blog2020?: string | null;
  order?: number | null;
  bio?: string | null;
  projects?: Project[]; // List of projects associated with the team member
}
