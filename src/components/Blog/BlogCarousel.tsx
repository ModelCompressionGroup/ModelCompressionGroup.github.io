'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Blog } from '@/types/blog';
import BlogCard from './BlogCard';

const BlogCarousel = ({ blogData }: { blogData: Blog[] }) => {
  return (
    <div className="container mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.slug}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex justify-center mt-4 space-x-4">
        <button className="custom-prev w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-none">
          ←
        </button>
        <button className="custom-next w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-none">
          →
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center mt-4 space-x-2"></div>
    </div>
  );
};

export default BlogCarousel;
