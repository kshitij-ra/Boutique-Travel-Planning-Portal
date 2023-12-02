import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import LoadingSpinner from '../components/loading-spinner.js'
import SolidButton from '../components/solid-button'
import PlaceCardNoButton from '../components/place-card-no-button'
import WorkWithUsBanner from '../components/work-with-us-banner'
import Footer from '../components/footer'
import './landing-page.css'

const LandingPage = (props) => {
  const [topGuides, setTopGuides] = useState([]);

  const [topDestinations, setTopDestinations] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const topGuidesResponse = await axios.get('https://dummyjson.com/products');
        const topGuidesResponse = await axios.get('https://5kpvhwogal.execute-api.us-east-1.amazonaws.com/topGuides');
        setTopGuides(topGuidesResponse.data);

        // const topDestinationsResponse = await axios.get('https://dummyjson.com/products');
        const topDestinationsResponse = await axios.get('https://5kpvhwogal.execute-api.us-east-1.amazonaws.com/topDestinations');
        setTopDestinations(topDestinationsResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
        fetchData();        
        
      }, []);

  return (
    <div className="landing-page-container">
      <Helmet>
        <title>T84 Travel Agency</title>
        <meta property="og:title" content="T84 Travel Agency" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1 className="landing-page-logo">T84 Travels</h1>
          <div className="landing-page-right-side">
            <div className="landing-page-links-container">
              <Link to="/" className="landing-page-navlink">
                Home
              </Link>
              <Link to="/all-destinations" className="landing-page-navlink01">
                Destinations
              </Link>
              <Link to="/local-guides" className="landing-page-navlink02">
                Local Guides
              </Link>
              <Link to="/packages-builder" className="landing-page-navlink03">
                Package Builder
              </Link>
            </div>
            <SolidButton button="Login"></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>T84 Travels</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  <Link to="/" className="landing-page-navlink04">
                    Home
                  </Link>
                  <Link
                    to="/all-destinations"
                    className="landing-page-navlink05"
                  >
                    Destinations
                  </Link>
                  <Link
                    to="/packages-builder"
                    className="landing-page-navlink06"
                  >
                    Package Builder
                  </Link>
                  <Link to="/local-guides" className="landing-page-navlink07">
                    Local Guides
                  </Link>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="Heading landing-page-text01">Book an experience </h1>
            <h2 className="Subheading landing-page-subheading">
              home for your personalized travel
            </h2>
            <span className="landing-page-text02">
              <span className="subsub">Each package is tailored to your needs,</span>
              <br></br>
              <span className="subsub"> cannot be found anywhere else.</span>
            </span>
            <Link to="/all-destinations" className="landing-page-navlink08">
              <SolidButton
                button="Explore Destinations"
                className="landing-page-component02"
              ></SolidButton>
            </Link>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
	      {!loading ? (
        <>
        <h1>Top Rated Destinations</h1>
        <span className="landing-page-text07">Recommended</span>
        <div className="landing-page-destination-cards-container">
          <PlaceCardNoButton
            card_title={topDestinations[0]?.DestinationName}
            description={`Rating: ${topDestinations[0]?.Rating} / 10`}
            image={topDestinations[0]?.DestinationImageLink}
            description1=""
            rootClassName="place-card-no-button-root-class-name6"
          ></PlaceCardNoButton>
          <PlaceCardNoButton
            card_title={topDestinations[1]?.DestinationName}
            description={`Rating: ${topDestinations[1]?.Rating} / 10`}
            image={topDestinations[1]?.DestinationImageLink}
            description1=""
            rootClassName="place-card-no-button-root-class-name8"
          ></PlaceCardNoButton>
          <PlaceCardNoButton
            card_title={topDestinations[2]?.DestinationName}
            description={`Rating: ${topDestinations[2]?.Rating} / 10`}
            image={topDestinations[2]?.DestinationImageLink}
            description1=""
            rootClassName="place-card-no-button-root-class-name7"
          ></PlaceCardNoButton> 
        </div>
        <Link to="/all-destinations" className="landing-page-navlink09">
          <SolidButton
            button="See all Destinations"
            rootClassName="solid-button-root-class-name4"
            className="landing-page-component06"
          ></SolidButton>
        </Link>
        <h1 className="landing-page-text08">Top Rated Local Guides</h1>
        <span className="landing-page-text09">Loved by our customers</span>
        <div className="landing-page-lg-cards-container">
          <PlaceCardNoButton
            card_title={topGuides[0]?.GuideName}
            description={topGuides[0]?.Location}
            description1={`Rating: ${topGuides[0]?.CustomerRating} / 10`}
            image={topGuides[0]?.ProfilePhotoLink}
            rootClassName="place-card-no-button-root-class-name9"
          ></PlaceCardNoButton>
          <PlaceCardNoButton
            card_title={topGuides[1]?.GuideName}
            description={topGuides[1]?.Location}
            description1={`Rating: ${topGuides[1]?.CustomerRating} / 10`}
            image={topGuides[1]?.ProfilePhotoLink}
            rootClassName="place-card-no-button-root-class-name10"
          ></PlaceCardNoButton>
          <PlaceCardNoButton
            card_title={topGuides[2]?.GuideName}
            description={topGuides[2]?.Location}
            description1={`Rating: ${topGuides[2]?.CustomerRating} / 10`}
            image={topGuides[2]?.ProfilePhotoLink}
            rootClassName="place-card-no-button-root-class-name11"
          ></PlaceCardNoButton> 
        </div>
        <Link to="/local-guides" className="landing-page-navlink10">
          <SolidButton
            button="See all Local Guides"
            rootClassName="solid-button-root-class-name5"
            className="landing-page-component10"
          ></SolidButton>
        </Link>
        </>
      ) : (
        <LoadingSpinner />
    )}
        <WorkWithUsBanner></WorkWithUsBanner>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default LandingPage
