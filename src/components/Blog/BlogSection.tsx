import SectionTitle from "../Common/SectionTitle";
import dynamic from 'next/dynamic';
import { loadBlogPosts } from "@/utils/loadBlogPosts";
import { Blog } from '@/types/blog';

const BlogCarousel = dynamic(() => import('@/components/Blog/BlogCarousel'), {
  ssr: false,
});


const BlogSection = () => {
  const blogData: Blog[] = loadBlogPosts();

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <BlogCarousel blogData={blogData} />
      </div>
    </section>
  );
};

export default BlogSection;
