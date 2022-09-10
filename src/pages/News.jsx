import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import BlogPosts from '../components/BlogPosts';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';

function News() {
  return (
    <>
      <Header2 />
      <PageBanner bannerBg={bannerBg} heading='News Feeds' currentPage='News' />
      <BlogPosts />
      <Footer2 />
    </>
  );
}

export default News;
