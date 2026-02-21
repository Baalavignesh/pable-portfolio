export interface IProject {
    title: string;
    key: string;
    description: string;
    tags: string[];
    inspiration: string;
    what: string;
    technologies:  string;
    when: string;
    github: string;
    other?: string;
    youtube?: string;
    featured?: boolean;
  }