import SectionTitle from "../Common/SectionTitle";
import dynamic from 'next/dynamic';
import { loadBlogPosts } from "@/utils/loadBlogPosts";
import { Blog } from '@/types/blog';
import NewTag from "../Common/NewTag";

const BlogCarousel = dynamic(() => import('@/components/Blog/BlogCarousel'), {
  ssr: false,
});


const BlogSection = () => {
  const blogData: Blog[] = loadBlogPosts();

  return (
    <section
      id="blog"
      className="dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Use Cases"
          paragraph="See how Edge AI solutions can transform legacy systems into high-efficiency operations. Explore our Edge AI use cases."
          center
        />
        <div className="flex justify-center mb-4"> 
          <NewTag href="/blog" text="Find more here"/>
        </div>
        <div className="px-8"> 
          <BlogCarousel blogData={blogData} />
        </div>
      </div>
    </section>
  );
};


export default BlogSection;
