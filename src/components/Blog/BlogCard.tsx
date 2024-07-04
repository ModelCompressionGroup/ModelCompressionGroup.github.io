import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

// Function to truncate preview text
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, image, preview, author, category, date, slug } = blog;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg duration-300 hover:shadow-2xl dark:bg-dark dark:hover:shadow-gray-dark flex flex-col h-full min-h-[400px]">
      {image && (
        <Link href={`/blog/posts/${slug}`} className="relative block aspect-[37/22] w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </Link>
      )}
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="line-clamp-2 title-two-lines">
            <Link href={`/blog/posts/${slug}`} className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
              {title}
            </Link>
          </h3>
          <hr className="my-4 border-gray-200 dark:border-gray-700" />
          <p className="mb-6 text-base font-medium text-body-color dark:text-white">
            {truncateText(preview, 190)} {/* Adjust character limit as needed */}
          </p>
        </div>
        <div className="flex items-center mt-auto">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">    
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/images/logo/logo.png"
                alt="author"
                fill
              />
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
