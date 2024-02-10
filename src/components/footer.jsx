import "../styles/footer.css";
import logoImg from "../assets/whiteLogo.png";

function Footer(){
  return (
    <div className="footer-parent">
      <div className="footer-img">
        <img src={logoImg}/>
      </div>
      <div className="footer-content">
        <h6 className="footer-active">Made with❤️</h6>
        <ul> 
          <li className="footer-text">Privacy policy </li>
          <li className="footer-text">Terms of usage </li>
          <li className="footer-text">Cancellation policy </li>
          <li className="footer-text">Sitemap </li> 
        </ul>
      </div>
    </div>
  )
}

export default Footer;