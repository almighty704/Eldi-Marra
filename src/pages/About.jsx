import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Approch';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';
import SkillSet from '../components/SkillSet';
import Sponsors from '../components/Sponsors';
import Timeline from '../components/Timeline';

function About() {
  return (
    <>
      <Header2 />
      <PageBanner
        bannerBg={bannerBg}
        currentPage='About Us'
        heading='About Us'
      />
      <AboutFeatured />
      <Approch />
      <SkillSet />
      <Sponsors />
      <Timeline />
      <Footer2 />
    </>
  );
}

export default About;
