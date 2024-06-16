import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Blog } from '@/types/blog';

export const loadBlogPosts = (): Blog[] => {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const blogData: Blog[] = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      preview: data.preview,
      author: data.author,
      date: data.date,
    };
  });

  return blogData;
};
