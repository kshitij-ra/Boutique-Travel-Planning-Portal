import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import LoadingSpinner from '../components/loading-spinner.js'
import SolidButton from '../components/solid-button'
import PlaceCardNoButton from '../components/place-card-no-button'
import WorkWithUsBanner from '../components/work-with-us-banner'
import Footer from '../components/footer'
import './local-guides.css'

const LocalGuides = (props) => {
  	const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const mockApiResponse = [
        {
          "GuideID": 1,
          "GuideName": "Lila Tahitian",
          "Location": "Bora Bora, French Polynesia",
          "CustomerRating": 9.1,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-12.jpg"
        },
        {
          "GuideID": 2,
          "GuideName": "Kai Adventure Guide",
          "Location": "Queenstown, New Zealand",
          "CustomerRating": 8.5,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-1.jpg"
        },
        {
          "GuideID": 3,
          "GuideName": "Nikos Santorini Explorer",
          "Location": "Santorini, Greece",
          "CustomerRating": 9.3,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-11.jpg"
        },
        {
          "GuideID": 4,
          "GuideName": "Banff Wilderness Expert",
          "Location": "Banff National Park, Canada",
          "CustomerRating": 8.8,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-5.jpg"
        },
        {
          "GuideID": 5,
          "GuideName": "Rio Rhythms Guide - Carlos",
          "Location": "Rio de Janeiro, Brazil",
          "CustomerRating": 9.2,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-3.jpg"
        },
        {
          "GuideID": 6,
          "GuideName": "Kyoto Wanderer - Sakura",
          "Location": "Kyoto, Japan",
          "CustomerRating": 9.4,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-9.jpg"
        },
        {
          "GuideID": 7,
          "GuideName": "Cape Town Safari Master - Nala",
          "Location": "Cape Town, South Africa",
          "CustomerRating": 8.7,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-22.jfif"
        },
        {
          "GuideID": 8,
          "GuideName": "Adventures with Ólafur",
          "Location": "Reykjavik, Iceland",
          "CustomerRating": 9.0,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-20.jfif"
        },
        {
          "GuideID": 9,
          "GuideName": "Barcelona Explorer - Elena",
          "Location": "Barcelona, Spain",
          "CustomerRating": 8.9,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-21.jfif"
        },
        {
          "GuideID": 10,
          "GuideName": "Phuket Paradise Guide - Aum",
          "Location": "Phuket, Thailand",
          "CustomerRating": 8.6,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-2.jpg"
        },
        {
          "GuideID": 11,
          "GuideName": "Marrakech Magic - Arri",
          "Location": "Marrakech, Morocco",
          "CustomerRating": 8.4,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-19.jfif"
        },
        {
          "GuideID": 12,
          "GuideName": "Perth Discovery - Matilda",
          "Location": "Perth, Australia",
          "CustomerRating": 7.8,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-13.jpg"
        },
        {
          "GuideID": 13,
          "GuideName": "Machu Picchu Explorer - Jean",
          "Location": "Machu Picchu, Peru",
          "CustomerRating": 9.3,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-17.jfif"
        },
        {
          "GuideID": 14,
          "GuideName": "Heritage Guide - Mara",
          "Location": "Dubrovnik, Croatia",
          "CustomerRating": 8.6,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-15.jfif"
        },
        {
          "GuideID": 15,
          "GuideName": "Maui Adventures - Keoni",
          "Location": "Maui, Hawaii, USA",
          "CustomerRating": 8.9,
          "ProfilePhotoLink": "https://tour-guides123.s3.amazonaws.com/Tour-guide-18.jpg"
        }]
        const fetchGuides = async () => {
          try {
              const response = await axios.get('https://5kpvhwogal.execute-api.us-east-1.amazonaws.com/getAllGuides');
              // const response = mockApiResponse;
              setGuides(response.data);
              // setGuides(response);
          } catch (error) {
              console.error('Error fetching local guides', error);
          } finally {
              setLoading(false);
          }
      };
  
      fetchGuides();
  }, []);

  return (
    <div className="local-guides-container">
      <Helmet>
        <title>Local-Guides - T84 Travel Agency</title>
        <meta property="og:title" content="Local-Guides - T84 Travel Agency" />
      </Helmet>
      <div className="local-guides-top-container">
        <nav data-role="Header" className="local-guides-navbar">
          <h1 className="local-guides-logo">T84 Travels</h1>
          <div className="local-guides-right-side">
            <div className="local-guides-links-container">
              <Link to="/" className="local-guides-navlink">
                Home
              </Link>
              <Link to="/all-destinations" className="local-guides-navlink1">
                Destinations
              </Link>
              <Link to="/local-guides" className="local-guides-navlink2">
                Local Guides
              </Link>
              <Link to="/packages-builder" className="local-guides-navlink3">
                Package Builder
              </Link>
            </div>
            <SolidButton button="Login"></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="local-guides-burger-menu">
            <svg viewBox="0 0 1024 1024" className="local-guides-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="local-guides-mobile-menu">
            <div className="local-guides-nav">
              <div className="local-guides-top">
                <h1>T84 Travels</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="local-guides-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="local-guides-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="local-guides-right-side1">
                <div className="local-guides-links-container1">
                  <Link to="/" className="local-guides-navlink4">
                    Home
                  </Link>
                  <Link
                    to="/all-destinations"
                    className="local-guides-navlink5"
                  >
                    Destinations
                  </Link>
                  <Link
                    to="/packages-builder"
                    className="local-guides-navlink6"
                  >
                    Package Builder
                  </Link>
                  <Link to="/local-guides" className="local-guides-navlink7">
                    Local Guides
                  </Link>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="local-guides-follow-container">
              <span className="local-guides-text">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="local-guides-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="local-guides-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="local-guides-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="local-guides-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="local-guides-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="local-guides-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="local-guides-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="local-guides-hero">
          <div className="local-guides-content-container">
            <h1 className="Heading local-guides-text1">
              Meet our amazing Local Guides
            </h1>
            <h2 className="local-guides-subheading">
              <span className="local-guides-text2">
                You can choose any of the guides when you create your
                personalized package.
              </span>
              <br className="local-guides-text3"></br>
              <span className="local-guides-text4">
                Ready to begin your journey?<br/>
              </span>
              <br></br>
            </h2>
            <Link to="/packages-builder" className="local-guides-navlink8">
              <SolidButton
                button="Create your Personalized Package"
                rootClassName="solid-button-root-class-name3"
                className="local-guides-component02"
              ></SolidButton>
            </Link>
          </div>
        </div>
      </div>
      <div id="main-section" className="local-guides-main">
        <div className="local-guides-cards-container">
          {!loading ? 
          guides.map((guide) => (
<PlaceCardNoButton
            card_title={guide.GuideName}
            description={guide.Location}
            description1={`Rating: ${guide.CustomerRating} / 10`}
            image={guide.ProfilePhotoLink}
          ></PlaceCardNoButton>
                
            ))
            : (
              <LoadingSpinner />
            )}
        </div>
        <WorkWithUsBanner rootClassName="work-with-us-banner-root-class-name1"></WorkWithUsBanner>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}


export default LocalGuides
