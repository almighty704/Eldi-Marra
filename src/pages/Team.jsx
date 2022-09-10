import bannerBg from '../assets/img/page-banner.jpg';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';
import Portfolio1 from '../components/Portfolio1';
import SkillSet from '../components/SkillSet';
import TeamMembers from '../components/TeamMembers';

function Team() {
  return (
    <>
      <Header2 />
      <PageBanner
        bannerBg={bannerBg}
        heading='Our Expert Team'
        currentPage='Team'
      />
      <TeamMembers />
      <SkillSet />
      <Portfolio1 />
      <Footer2 />
    </>
  );
}

export default Team;
