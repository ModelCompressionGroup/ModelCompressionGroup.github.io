import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    description: matterResult.data.preview,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {matterResult.data.title}
              </h2>
              <div className="mb-10">
                <div className="flex items-center">
                  <p className="mr-5 text-base font-medium text-body-color">
                    By {matterResult.data.author}
                  </p>
                  <p className="text-base font-medium text-body-color">
                    {matterResult.data.date}
                  </p>
                </div>
              </div>
              <div
                className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

