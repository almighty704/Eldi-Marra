import bannerBg from '../assets/img/page-banner.jpg';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';
import ProjectFilter from '../components/ProjectFilter';

function Projects() {
  return (
    <>
      <Header2 />
      <PageBanner
        bannerBg={bannerBg}
        heading='Case Study'
        currentPage='Project'
      />
      <ProjectFilter />
      <Footer2 />
    </>
  );
}

export default Projects;
