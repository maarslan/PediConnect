export interface Content {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'conference' | 'qa';
  isPremium: boolean;
  authorId: string;
  authorName: string;
  createdAt: string;
  tags: string[];
}

export interface Question {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  isPremium: boolean;
  responses: Response[];
}

export interface Response {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  credentials: string;
}