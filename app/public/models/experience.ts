export interface IExperience {
    company: string;
    role: string;
    type: string;
    location: string;
    duration: string;
    length: string;
    description?: string;
    // Not currently rendered on the site — kept as a detailed personal reference
    // so this doesn't need to be re-derived from memory each time.
    bullets?: string[];
    skills: string[];
    logo: string;
    url: string;
  }