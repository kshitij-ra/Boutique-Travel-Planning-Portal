import React from "react";

import PropTypes from "prop-types";

import "./ppb1.css";

const PPB1 = (props) => {
  return (
    <div className="ppb1-ppb1">
      <h1 className="ppb1-text00">{props.heading}</h1>
      <span className="ppb1-text01">
        <span>
          Embark on a journey of personalized travel with our one-of-a-kind
          Package Builder. We believe every adventure should be as unique as you
          are, and that&apos;s why we&apos;ve created this intuitive tool to put
          the power of customization in your hands.
        </span>
        <br/><br/>
        <span className="ppb1-heading">Why choose our Package Builder?</span>
        <br/><br/>
        <span className="ppb1-subhead">🌍Explore Limitless Possibilities:</span>
        <span>
          {" "}
          Your dream vacation is just a few clicks away. Discover a myriad of
          options as you embark on a journey through our carefully curated
          features.
        </span>
        <br/><br/>
        <span className="ppb1-subhead">🧳 Craft Your Perfect Getaway:</span>
        <span>
          {" "}
          Tailor every aspect of your trip, from destinations to accommodations,
          activities, and more. With our easy-to-use form, you&apos;re in
          control of designing an experience that suits your tastes and
          preferences.
        </span>
        <br/><br/>
        <span className="ppb1-subhead">🤩 Unleash Your Imagination:</span>
        <span>
          {" "}
          Dream big, because we&apos;re here to turn your travel fantasies into
          reality. Whether you&apos;re a solo adventurer, a couple seeking
          romance, or a family in search of unforgettable moments, our Package
          Builder is designed to cater to all your needs.
        </span>
        <br/><br/>
        <span className="ppb1-subhead">🚀 Effortless Planning:</span>
        <span>
          {" "}
          Say goodbye to the hassle of sifting through endless options. Our tool
          streamlines the planning process, making it enjoyable and stress-free.
          Build your perfect package at your own pace, with no compromises.
        </span>
        <br/><br/><br/>
        <span className="ppb1-heading">How it works:</span>
        <br/><br/>
        <span className="ppb1-subhead">1. Start Building:</span>
        <span>
          {" "}
          Dive into the first step of your journey by exploring our exclusive
          features and understanding the incredible possibilities that await
          you.
        </span>
        <br/><br/>
        <span className="ppb1-subhead">2. Personalize Your Adventure:</span>
        <span>
          {" "}
          As you progress through each step, personalize your travel experience
          by selecting destinations, accommodations, activities, and more in
          form of tags. The power to shape your perfect getaway is in your
          hands.
        </span>
        <br/><br/>
        <span className="ppb1-subhead">3. Experience the Extraordinary:</span>
        <span>
          {" "}
          Once you&apos;ve completed the form, sit back and let our experts work
          their magic. Your dream itinerary will soon be a reality, offering you
          a one-of-a-kind adventure crafted just for you.
        </span>
        <br/><br/>
        <span>
          Ready to embark on a journey like never before? Let&apos;s start
          building your dream package!
        </span>
      </span>
    </div>
  );
};

PPB1.defaultProps = {
  heading:
    "Welcome to Our Package Builder - Your Gateway to Tailored Travel Experiences!",
};

PPB1.propTypes = {
  heading: PropTypes.string,
};

export default PPB1;
