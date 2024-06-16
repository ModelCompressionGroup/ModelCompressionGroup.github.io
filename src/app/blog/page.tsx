import Breadcrumb from '@/components/Common/Breadcrumb';
import dynamic from 'next/dynamic';
import { loadBlogPosts } from '@/utils/loadBlogPosts';
import { Blog } from '@/types/blog';

const BlogCarousel = dynamic(() => import('@/components/Blog/BlogCarousel'), {
  ssr: false,
});

export default function BlogPage() {
  const blogData: Blog[] = loadBlogPosts();

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Explore our latest blog posts and stay updated with the current trends."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <BlogCarousel blogData={blogData} />
        </div>
      </section>
    </>
  );
}

