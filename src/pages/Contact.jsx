import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';

function Contact() {
  return (
    <>
      <Header2 />
      <PageBanner
        bannerBg={bannerBg}
        heading='Contact Us'
        currentPage='Contact'
      />
      <ContactUs />
      <ContactForm title='Write Message' heading='Get In Touch' />
      <Footer2 />
    </>
  );
}

export default Contact;
