import React, {useState} from "react";
import visa from "../assets/visa.png";
import masterCard from "../assets/master-card.png";
import dinersClub from "../assets/diners-club.png";
import applePay from "../assets/apple-pay.png";
import googlePay from "../assets/google-pay.png"
import info from "../assets/info.png";
import "../styles/paymentMode.css";

function PaymentMode(){
  const [showCreditDebit, setShowCreditDebit] = useState(true);

  const handleRadioChange = () => {
    setShowCreditDebit(!showCreditDebit);
  };

  const price=`<price>`

  return (
    <>
      <h1 className="payment-heading">Select your mode of payment</h1>
      <p className="payment-para">Payments with Tickete are secure and encrypted.</p>
      {showCreditDebit ? (
        <div className="payment-options">
          <div className="credit-debit">
            <div className="card-option">
              <div className="cards">
                <i className="fa-regular fa-credit-card"></i>
              </div>
              <h1 className="type-card">Credit & debit card</h1>
            </div>
            <div className="check-button">
              <input type="radio" id="check" name="paymentMode" onChange={handleRadioChange} />
              <label style={{ backgroundColor: 'white' }} htmlFor="check"><i className="fa-solid fa-circle-dot"></i></label>
            </div>
          </div>
          <div className="payment-m-parent">
            <img src={visa} className="payment-method" alt="Visa" />
            <img src={masterCard} className="payment-method" alt="MasterCard" />
            <img src={dinersClub} className="payment-method" alt="Diners Club" />
          </div>
          <div>
            <form>
              <div className="country-phone">
                <input type="text" id="cardName" name="cardName" placeholder="Name on card *" className="input-field" required/>
                <input type="text" id="cardNumber" name="cardNumber" pattern="[0-9]{16}" placeholder="Card number *" className="input-field" required/>
              </div>
              <div className="country-phone Expiration">
                <input type="text" id="expiryDate" name="expiryDate" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" placeholder="Expiry date *" className="input-field" required/>
                <input type="text" id="cvc" name="cvc" pattern="[0-9]{3}" placeholder="<CW/CVC> *" className="input-field" required/>
              </div>
            </form>
          </div>
          <hr className="my-4 line" />
          <div>
            <div className="amount-discount">
              <h1 className="payable-heading">Total payable: <span className="total-bill">$XXX</span></h1>
              <button type="button" className="btn btn-success discount-made"><i className="fa-solid fa-piggy-bank"></i> You save {price}</button>
            </div>
            <div className="currency">
              <p className="currency-type">You will be charged in AED</p>
              <img src={info} className="info-img" alt="info"/>
            </div>
            <p className="confirm-terms">By clicking “confirm & pay”, you agree to <span className="check-details">Tickete’s general terms</span> and <span className="check-details">conditions and cancellation policy.</span></p>
            <button type="button" className="btn btn-dark confirm-payment"><i className="fa-solid fa-lock fawesome"></i> Confirm & pay</button>
          </div>
        </div>
      ) : (
          <div className="various-options" >
            <div className="soon-option">
              <div className="cards outdated">
                <i className="fa-regular fa-credit-card"></i>
              </div>
              <h1 className="type-card">Credit & debit card</h1>
            </div>
            <div className="check-button">
              <input type="radio" id="check" name="paymentMode" onChange={handleRadioChange} />
              <label htmlFor="check"></label>
            </div>
          </div>
      )}
      <div className="various-options" >
        <div className="soon-option">
          <div className="outdated">
            <img src={applePay} className="payment-method" alt="applePay"/>
          </div>
          <h1 className="type-card">Coming soon</h1>
        </div>
        <div className="check-button">
          <label></label>
        </div>
      </div>
      <div className="various-options" >
        <div className="soon-option">
          <div className="outdated">
            <img src={googlePay} className="payment-method" alt="googlePay"/>
          </div>
          <h1 className="type-card">Coming soon</h1>
        </div>
        <div className="check-button">
          <label></label>
        </div>
      </div>
      <hr className="my-4 line" />
    </>
  )
}

export default PaymentMode;