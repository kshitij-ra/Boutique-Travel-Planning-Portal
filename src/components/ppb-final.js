import React from 'react'

import PropTypes from 'prop-types'

import './ppb-final.css'

const PPBFinal = (props) => {
  return (
    <div className="ppb-final-container">
      <div className="ppb-final-header">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/082/388/large_2x/green-stamp-with-tick-icon-in-flat-line-style-free-vector.jpg"
          alt="Booking Confirmation"
          className="ppb-final-image"
        />
        <h1 className="ppb-final-text">Booking Received</h1>
      </div>
      <div className="ppb-final-text-container">
        <span>
          <span>
            Thank you for choosing T84 Travels! We&apos;re excited to inform you
            that your booking has been received. Our dedicated team is already
            hard at work creating a one-of-a-kind travel package tailored just
            for you.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="ppb-final-head">What to Expect:</span>
          <br></br>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="ppb-final-sub">Confirmation</span>
          <span>
            : Your booking is confirmed, and our team is now crafting a
            personalized itinerary to make your travel experience unforgettable.
          </span>
          <br></br>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="ppb-final-sub">Timeframe</span>
          <span>
            : Please allow up to 24 hours for the final itinerary to reach your
            inbox. We want to ensure every detail is carefully curated to meet
            your preferences.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span className="ppb-final-head">Next Steps:</span>
          <br></br>
          <br></br>
          <span className="ppb-final-sub">Stay Tuned</span>
          <span>
            : Keep an eye on your email for the comprehensive travel package we
            are preparing exclusively for you.
          </span>
          <br></br>
          <br></br>
          <span className="ppb-final-sub">Contact Us</span>
          <span>
            : If you have any immediate questions or specific requests, feel
            free to reach out to our dedicated support team using our contact
            form.
          </span>
          <br></br>
          <br></br>
          <span>
            We appreciate your trust in T84 Travels, and we look forward to
            providing you with a seamless and memorable travel experience.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span>Safe travels!</span>
          <br></br>
          <br></br>
          <span>Best Regards,</span>
          <br></br>
          <br></br>
          <span>The T84 Travels Team</span>
        </span>
      </div>
    </div>
  )
}

export default PPBFinal
