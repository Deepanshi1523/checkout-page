import React from "react";
import CarouselCompo from "./carousel";
import star from "../../assets/star.png"
import "../../styles/bookingSummary.css";

function bookingSummary(){
  const ticketName = "<ticket type-varient>"
  const duration = [
    "<day>,<month> <day>", "Duration: <duration>"
  ]
  const time = [
    "<time>","Operating hours: <time> to <time>"
  ]
  const spanTag = "4.5k <category>"
  const price = " <price>"
  return (
    <div className="aside">
      <div className="parent">
        <CarouselCompo/>
        <div className="category-1">
          <div className="rating">
            <img src={star} png="star"/>
            <span><b>4.9  </b>{spanTag}</span>
          </div>
          <div className="destination">
            <h3>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</h3>
          </div>
          <div className="details">
            <div className="ticket info">
              <b>
                <i class="fa-solid fa-ticket tag"></i>
                 {ticketName}
              </b>
            </div>
            <div className="duration info">
              <i class="fa-solid fa-calendar tag"></i>
              <span>
                <b>
                  {duration[0]}
                </b>
                {duration[1]}
              </span>
            </div>
            <div className="time info">
            <i class="fa-solid fa-clock tag"></i>
              <span>
                <b>
                  {time[0]}
                </b>
                {time[1]}
              </span>
            </div>
            <div className="guests info">
            <i class="fa-solid fa-users tag"></i>
                <b>
                  5 guests
                </b>
            </div>
          </div>
        </div>
        <div className="view-payment-summary">
          <span>
            <p>View payment summary</p>
            <i class="fa-solid fa-plus"></i>
          </span>
        </div>
        <div className="Total-Payment">
          <div className="pay">
            <div>
              <h2>
                Total payable
              </h2>
              <div className="saved">
                <i class="fa-solid fa-piggy-bank"></i>
                <span> You saved {price}</span>
              </div>
            </div>
            <div className="amount">
              <h2>
                $XXX
              </h2>
            </div>
          </div>
          <div className="charged-cur">
            You will be charged in AED <i class="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bookingSummary;