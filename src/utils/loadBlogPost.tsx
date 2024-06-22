import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function loadBlogPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug, 
    title: data.title,
    preview: data.preview,
    author: data.author,
    date: data.date,
    category: data.category,
    image: data.image,
    keywords: data.keywords || '',
    content,
  };
}
