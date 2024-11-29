export interface ContentSection {
  title: string;
  content: string;
  ageGroup: string;
  expertTip?: string;
}

export interface Activity {
  title: string;
  description: string;
  duration: string;
  materials: string[];
  steps: string[];
}

export interface ReadingContent {
  sections: ContentSection[];
  activities: Activity[];
}