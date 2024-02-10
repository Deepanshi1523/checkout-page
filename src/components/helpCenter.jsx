import "../styles/helpCenter.css";
import helpImg from "../assets/help-center.png"
import AskedQuestion from "./askedQuestion";

function helpCenter({isMobile}){
  return (
    <>
      <div className="helpCenterContainer">
        <h1 className="heading">Frequently asked questions</h1>
        <p className="description">Here are some of our most asked questions.</p>
        {isMobile  && <AskedQuestion />}
        <div className="helpCentre-div">
          <div className="helpCentre-desc">
            <p className="seek-help">Still need help? We're here for you.</p>
            <button type="button" class="btn btn-dark chat-btn">Chat with us</button>
          </div>
          <img src={helpImg} className="chat-img" alt="chat-img"/>
        </div>
      </div>
    </>
  )
}

export default helpCenter;