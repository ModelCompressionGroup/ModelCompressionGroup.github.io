'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Blog } from '@/types/blog';
import BlogCard from './BlogCard';

const BlogCarousel = ({ blogData }: { blogData: Blog[] }) => {
  return (
    <div className="container mx-auto py-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // Delay of 3 seconds
          disableOnInteraction: false // Continue autoplay after interaction
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.slug}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;
