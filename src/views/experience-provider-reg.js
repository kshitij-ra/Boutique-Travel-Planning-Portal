import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import DestProvForm from '../components/dest-prov-form'
import SolidButton from '../components/solid-button'
import WorkWithUsBanner from '../components/work-with-us-banner'
import Footer from '../components/footer'
import './experience-provider-reg.css'

const ExperienceProviderReg = (props) => {
  return (
    <div className="experience-provider-reg-container">
      <Helmet>
        <title>Experience-Provider-Reg - T84 Travel Agency</title>
        <meta
          property="og:title"
          content="Experience-Provider-Reg - T84 Travel Agency"
        />
      </Helmet>
      <div className="experience-provider-reg-top-container">
        <nav data-role="Header" className="experience-provider-reg-navbar">
          <h1 className="experience-provider-reg-logo">T84 Travels</h1>
          <div className="experience-provider-reg-right-side">
            <div className="experience-provider-reg-links-container">
              <Link to="/" className="experience-provider-reg-navlink">
                Home
              </Link>
              <Link
                to="/all-destinations"
                className="experience-provider-reg-navlink1"
              >
                Destinations
              </Link>
              <Link
                to="/local-guides"
                className="experience-provider-reg-navlink2"
              >
                Local Guides
              </Link>
              <Link
                to="/packages-builder"
                className="experience-provider-reg-navlink3"
              >
                Package Builder
              </Link>
            </div>
            <SolidButton button="Login"></SolidButton>
          </div>
          <div
            data-role="BurgerMenu"
            className="experience-provider-reg-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="experience-provider-reg-burger-menu1"
            >
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div
            data-role="MobileMenu"
            className="experience-provider-reg-mobile-menu"
          >
            <div className="experience-provider-reg-nav">
              <div className="experience-provider-reg-top">
                <h1>T84 Travels</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="experience-provider-reg-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="experience-provider-reg-icon03"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="experience-provider-reg-right-side1">
                <div className="experience-provider-reg-links-container1">
                  <Link to="/" className="experience-provider-reg-navlink4">
                    Home
                  </Link>
                  <Link
                    to="/all-destinations"
                    className="experience-provider-reg-navlink5"
                  >
                    Destinations
                  </Link>
                  <Link
                    to="/packages-builder"
                    className="experience-provider-reg-navlink6"
                  >
                    Package Builder
                  </Link>
                  <Link
                    to="/local-guides"
                    className="experience-provider-reg-navlink7"
                  >
                    Local Guides
                  </Link>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="experience-provider-reg-follow-container">
              <span className="experience-provider-reg-text">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="experience-provider-reg-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="experience-provider-reg-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="experience-provider-reg-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="experience-provider-reg-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="experience-provider-reg-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="experience-provider-reg-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="experience-provider-reg-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="experience-provider-reg-hero">
          <div className="experience-provider-reg-content-container">
            <h1 className="Heading experience-provider-reg-text1">
              Wanna work with us as an experience provider?
            </h1>
            <h2 className="experience-provider-reg-subheading">
              <span className="experience-provider-reg-text2">
                Fill the form below and we will reach out to you :)
              </span>
              <br></br>
            </h2>
            <Link to="/about-us" className="experience-provider-reg-navlink8">
              <SolidButton
                button="Learn more about us"
                rootClassName="solid-button-root-class-name2"
                className="experience-provider-reg-component2"
              ></SolidButton>
            </Link>
          </div>
        </div>
      </div>
      <div id="main-section" className="experience-provider-reg-main">
        <div className="experience-provider-reg-container1">
          <DestProvForm />
          <SolidButton button="Submit" onClick={() => alert("Thank you for applying. We will reach out to you after reviewing your appliation.")} />
        </div>
        <WorkWithUsBanner rootClassName="work-with-us-banner-root-class-name3"></WorkWithUsBanner>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default ExperienceProviderReg
