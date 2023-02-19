export interface IProjectCard {
  title: string;
  urlScreenshot: string;
  urlLive: string;
  urlGit: string;
  body: string[];
}

export interface IAboutData {
  fullName: string;
  sector: string;
  location: string;
  contact: string;
  gitHubName: string;
  gitHubUrl: string;
  urlLinkedIn: string;
  bio: string[];
  skills: ISkillData[];
}

export interface ISkillData {
  name: string;
  level: number;
}
