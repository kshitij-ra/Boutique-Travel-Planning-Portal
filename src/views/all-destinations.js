import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import LoadingSpinner from '../components/loading-spinner.js'
import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import WorkWithUsBanner from '../components/work-with-us-banner'
import Footer from '../components/footer'
import './all-destinations.css'

const AllDestinations = (props) => {
	const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setDestinations(response.data.products);
            } catch (error) {
                console.error('Error fetching destinations', error);
            } finally {
              setLoading(false);
            }
        };
        fetchDestinations();
    }, []);
  return (
    <div className="all-destinations-container">
      <Helmet>
        <title>All-Destinations - T84 Travel Agency</title>
        <meta
          property="og:title"
          content="All-Destinations - T84 Travel Agency"
        />
      </Helmet>
      <div className="all-destinations-top-container">
        <nav data-role="Header" className="all-destinations-navbar">
          <h1 className="all-destinations-logo">T84 Travels</h1>
          <div className="all-destinations-right-side">
            <div className="all-destinations-links-container">
              <Link to="/" className="all-destinations-navlink">
                Home
              </Link>
              <Link
                to="/all-destinations"
                className="all-destinations-navlink1"
              >
                Destinations
              </Link>
              <Link to="/local-guides" className="all-destinations-navlink2">
                Local Guides
              </Link>
              <Link
                to="/packages-builder"
                className="all-destinations-navlink3"
              >
                Package Builder
              </Link>
            </div>
            <SolidButton button="Login"></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="all-destinations-burger-menu">
            <svg
              viewBox="0 0 1024 1024"
              className="all-destinations-burger-menu1"
            >
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="all-destinations-mobile-menu">
            <div className="all-destinations-nav">
              <div className="all-destinations-top">
                <h1>T84 Travels</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="all-destinations-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="all-destinations-icon03"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="all-destinations-right-side1">
                <div className="all-destinations-links-container1">
                  <Link to="/" className="all-destinations-navlink4">
                    Home
                  </Link>
                  <Link
                    to="/all-destinations"
                    className="all-destinations-navlink5"
                  >
                    Destinations
                  </Link>
                  <Link
                    to="/packages-builder"
                    className="all-destinations-navlink6"
                  >
                    Package Builder
                  </Link>
                  <Link
                    to="/local-guides"
                    className="all-destinations-navlink7"
                  >
                    Local Guides
                  </Link>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="all-destinations-follow-container">
              <span className="all-destinations-text">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="all-destinations-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="all-destinations-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="all-destinations-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="all-destinations-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="all-destinations-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="all-destinations-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="all-destinations-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="all-destinations-hero">
          <div className="all-destinations-content-container">
            <h1 className="Heading all-destinations-text1">
              Explore all destinations
            </h1>
            <h2 className="all-destinations-subheading">
              <span className="Subheading all-destinations-text2">
                Once you are ready to make you custom travel package,
              </span>
              <br className="Subheading all-destinations-text3"></br>
              <span className="Subheading all-destinations-text4">
                head over to our package builder.
              </span>
              <br></br>
            </h2>
            <Link to="/packages-builder" className="all-destinations-navlink8">
              <SolidButton
                button="Create your Personalized Package"
                rootClassName="solid-button-root-class-name"
                className="all-destinations-component02"
              ></SolidButton>
            </Link>
          </div>
        </div>
      </div>
      <div id="main-section" className="all-destinations-main">
        <h1>Explore all destinations</h1>
	<div className="all-destinations-cards-container">
	  {/* <PlaceCard
            card_title="London"
          ></PlaceCard>
	  <PlaceCard
            card_title="London"
          ></PlaceCard>
	  <PlaceCard
            card_title="London"
          ></PlaceCard> */}
	  {!loading ? (
    <>
        {destinations.map((destination) => (
            <PlaceCard
                key={destination.id}  // Adding a unique key for each iteration
                card_title={destination.id}
                description={destination.title}
            ></PlaceCard>
        ))}
    </>
) : (
    <LoadingSpinner />
)}

	</div>
        <WorkWithUsBanner rootClassName="work-with-us-banner-root-class-name"></WorkWithUsBanner>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AllDestinations 
