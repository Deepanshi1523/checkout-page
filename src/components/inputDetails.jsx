import "../styles/inputDetails.css";

function inputDetail(){
  return(
    <>
      <div className="userDetail-parent">
        <h1 className="detail-heading">Enter your details</h1>
        <p className="detail-para">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
        <div>
          <form>
            <input type="text" id="name" name="name" placeholder="Full name *" required className="name"/>
            <div className="country-phone">
              <select id="country-code" name="country-code" required className="input-field custom-select">
                <option value="">&#x1F30D; Country code *</option>
                <option value="1">+1</option>
                <option value="44">+44</option>
                <option value="91">+91</option>
              </select>
              <input type="tel" id="phone" name="phone" placeholder="Phone number *" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required className="input-field"/>
            </div>
            <div className="email-verify">
              <input type="email" id="email" name="email" placeholder="Email *" required className="input-field"/>
              <input type="email" id="confirm-email" name="confirm-email" placeholder="Confirm email *" required className="input-field"/>
            </div>
          </form>
        </div>
        <hr className="my-4 line" />
      </div>
    </>
  )
}

export default inputDetail;