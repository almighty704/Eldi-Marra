import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import ServiceSidebar from '../components/ServiceSidebar';

function ServicesDetails() {
  return (
    <>
      <Header2 />
      <PageBanner
        bannerBg={bannerBg}
        heading='Service Details'
        currentPage='Service Details'
      />
      <section className='service-details-wrapper section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1'>
              <ServiceSidebar />
            </div>
            <div className='col-lg-9 col-md-8 col-12 order-1 order-md-2'>
              <ServiceDetails />
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}

export default ServicesDetails;
