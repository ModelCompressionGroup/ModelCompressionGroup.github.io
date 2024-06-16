// src/utils/loadBlogPosts.ts
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Blog } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export const loadBlogPosts = (): Blog[] => {
  const filenames = fs.readdirSync(postsDirectory);

  const blogData: Blog[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      preview: data.preview,
      author: data.author,
      date: data.date,
      image: data.image,
      content,  // Include the content
    };
  });

  return blogData;
};

