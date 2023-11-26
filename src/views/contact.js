import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import WorkWithUsBanner from '../components/work-with-us-banner'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - T84 Travel Agency</title>
        <meta property="og:title" content="Contact - T84 Travel Agency" />
      </Helmet>
      <div className="contact-top-container">
        <nav data-role="Header" className="contact-navbar">
          <h1 className="contact-logo">T84 Travels</h1>
          <div className="contact-right-side">
            <div className="contact-links-container">
              <Link to="/" className="contact-navlink">
                Home
              </Link>
              <Link to="/all-destinations" className="contact-navlink1">
                Destinations
              </Link>
              <Link to="/local-guides" className="contact-navlink2">
                Local Guides
              </Link>
              <Link to="/packages-builder" className="contact-navlink3">
                Package Builder
              </Link>
            </div>
            <SolidButton button="Login"></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="contact-mobile-menu">
            <div className="contact-nav">
              <div className="contact-top">
                <h1>T84 Travels</h1>
                <div data-role="CloseMobileMenu" className="contact-close-menu">
                  <svg viewBox="0 0 1024 1024" className="contact-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="contact-right-side1">
                <div className="contact-links-container1">
                  <Link to="/" className="contact-navlink4">
                    Home
                  </Link>
                  <Link to="/all-destinations" className="contact-navlink5">
                    Destinations
                  </Link>
                  <Link to="/packages-builder" className="contact-navlink6">
                    Package Builder
                  </Link>
                  <Link to="/local-guides" className="contact-navlink7">
                    Local Guides
                  </Link>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="contact-follow-container">
              <span className="contact-text">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="contact-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="contact-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="contact-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="contact-hero">
          <div className="contact-content-container">
            <h1 className="Heading contact-text1">Contact us</h1>
            <h2 className="contact-subheading">
              <span className="contact-text2">
                Fill the form below and we will reach out to you :)
              </span>
              <br></br>
            </h2>
	    <Link to="/about-us">
            <SolidButton
              button="Learn more about us"
              rootClassName="solid-button-root-class-name6"
              className="contact-component2"
            ></SolidButton></Link>
          </div>
        </div>
      </div>
      <div id="main-section" className="contact-main">
        <div className="contact-container1">
          <h1>TO-DO: create a contact form</h1>
        </div>
        <WorkWithUsBanner rootClassName="work-with-us-banner-root-class-name5"></WorkWithUsBanner>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Contact
