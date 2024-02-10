import "../styles/confirmPay.css";
import BookingSummary from "./booking-summary/bookingSummary";

function ConfirmPay({isMobile}){

  return (
    <>
      <div className="confirm-transaction-heading">Confirm & pay</div>
      {isMobile && <BookingSummary/>}
      <div className="cancellation-parent">
        <div className="cancellation">
          <h1 className="cancel-heading">Free cancellation</h1>
          <p className="cancel-para">Tickets can be cancelled by 13th December, 2022.</p>
        </div>
        <i className="fa-solid fa-circle-info"></i>
      </div>
      {isMobile && <hr/>}
    </>
  )
}

export default ConfirmPay;