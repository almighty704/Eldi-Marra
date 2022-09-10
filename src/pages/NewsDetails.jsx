import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import BlogDetails from '../components/BlogDetails';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';

function NewsDetails() {
  return (
    <>
      <Header2 />
      <PageBanner
        bannerBg={bannerBg}
        heading='News Details'
        currentPage='News Details'
      />
      <BlogDetails />
      <Footer2 />
    </>
  );
}

export default NewsDetails;
