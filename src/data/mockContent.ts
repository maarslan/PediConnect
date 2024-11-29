import { Content } from '../types/content';

export const contents: Content[] = [
  {
    id: "1",
    title: "Understanding Your Child's Emotional Development",
    description: "A comprehensive guide to emotional milestones and how to support your child's emotional growth.",
    type: "article",
    isPremium: true,
    authorId: "1",
    authorName: "Dr. Sarah Chen",
    createdAt: "2024-03-15",
    tags: ["emotional development", "psychology", "parenting tips"],
    content: "Full article content here...",
    readTime: "8 min read"
  },
  {
    id: "2",
    title: "Common Childhood Illnesses: What Parents Should Know",
    description: "Learn about frequent childhood ailments and when to seek medical attention.",
    type: "video",
    isPremium: false,
    authorId: "2",
    authorName: "Dr. Michael Rodriguez",
    createdAt: "2024-03-14",
    tags: ["health", "medical advice", "child care"],
    videoUrl: "https://example.com/video1",
    duration: "15:30"
  },
  {
    id: "3",
    title: "Early Reading Skills Workshop",
    description: "Interactive session on developing reading skills in young children.",
    type: "conference",
    isPremium: true,
    authorId: "3",
    authorName: "Prof. Emily Thompson",
    createdAt: "2024-03-20",
    tags: ["education", "literacy", "early learning"],
    date: "2024-04-01",
    time: "10:00 AM EST"
  }
];