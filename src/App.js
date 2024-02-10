import React, {useState,useEffect} from "react";
import Header from './components/header';
import BookingSummary from './components/booking-summary/bookingSummary';
import ConfirmPay from "./components/confirmPay"
import InputDetail from "./components/inputDetails";
import AdditionalInfo from './components/additionalInfo';
import PaymentMode from './components/paymentMode';
import TotalPayable from "./components/totalPayable";
import AskedQuestion from './components/askedQuestion';
import HelpCenter from './components/helpCenter';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    } 

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header/>
      <div className='body-parent'>
        <div className='left-components' >
          <ConfirmPay isMobile={isMobile}/>
          <InputDetail/>
          <AdditionalInfo/>
          <PaymentMode/>
          <TotalPayable/>
        </div>
        {!isMobile && <BookingSummary/>}
      </div>
      <div className='bottom-container'>
        <div className='left-centre'>
          <HelpCenter isMobile={isMobile}/>
        </div>
        {!isMobile  && <AskedQuestion />}
      </div>
      <Footer/>
    </>
  );
}

export default App;
