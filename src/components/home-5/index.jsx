// import GlobalFilter from "../common/GlobalFilter";

import dynamic from 'next/dynamic';

// const GlobalFilter = dynamic(() => import('../common/GlobalHeroFilter'));
const MobileMenu = dynamic(() => import('../common/header/MobileMenu'));
const FeaturedProperties = dynamic(() => import('../home/FeaturedProperties'));
const FindProperties = dynamic(() => import('./FindProperties'));
const Header = dynamic(() => import('./Header'));
const Testimonial = dynamic(() => import('../common/Testimonial'));
const Partners = dynamic(() => import('../common/Partners'));
const CallToAction = dynamic(() => import('../common/CallToAction'));
const Footer = dynamic(() => import('../common/footer/Footer'));
const CopyrightFooter = dynamic(() => import('../common/footer/CopyrightFooter'));
const Blogs = dynamic(() => import('../common/Blogs'));
const PopupSignInUp = dynamic(() => import('../common/PopupSignInUp'));
const Hero = dynamic(() => import('./Hero'));
// import MobileMenu from "../common/header/MobileMenu";
// import WhyChoose from "../common/WhyChoose";
// import FeaturedProperties from "../home/FeaturedProperties";
// import FindProperties from "./FindProperties";
// import Header from "./Header";
// import LookingItem from "./LookingItem";
// import Testimonial from "../common/Testimonial";
// import Partners from "../common/Partners";
// import CallToAction from "../common/CallToAction";
// import Footer from "../common/footer/Footer";
// import CopyrightFooter from "../common/footer/CopyrightFooter";
// import Blogs from "../common/Blogs";
// import PopupSignInUp from "../common/PopupSignInUp";
// import Hero from "./Hero";

const Index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero/>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <FindProperties />
          </div>
        </div>
      </section>

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="property-city pb30 bg-ptrn1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Featured Properties</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us bgc-f7 pb30 d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <WhyChoose style="style2" /> */}
          </div>
        </div>
      </section>

      {/* <!-- Our Testimonials --> */}
      <section id="our-testimonials" className="our-testimonial home5 d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="color-white">Testimonials</h2>
                <p className="color-white">Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider">
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bg-ptrn2 pb30 d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      <section id="our-partners" className="our-partners d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home5">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Index;
