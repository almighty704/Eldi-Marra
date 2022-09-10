import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';
import PortfolioDetails from '../components/PortfolioDetails';

function ProjectDetails() {
  return (
    <>
      <Header2 />
      <PageBanner
        bannerBg={bannerBg}
        heading='Portfolio Details'
        currentPage='Portfolio Details'
      />
      <PortfolioDetails />
      <Footer2 />
    </>
  );
}

export default ProjectDetails;
