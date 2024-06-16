// src/components/Blog/BlogCard.tsx
import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, image, preview, author, category, date, slug } = blog;

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      {image && (
        <Link href={`/blog/posts/${slug}`} className="relative block aspect-[37/22] w-full">
          <Image src={image} alt={title} layout="fill" className="object-cover" />
        </Link>
      )}
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link href={`/blog/posts/${slug}`} className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
            {title}
          </Link>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {preview}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {author}
              </h4>
            </div>
          </div>
          <div className="w-full">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date
            </h4>
            <p className="text-xs text-body-color">{date}</p>
          </div>
          <div className="w-full">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Category
            </h4>
            <p className="text-xs text-body-color">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
