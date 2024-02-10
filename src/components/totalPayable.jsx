import "../styles/totalPayable.css";

function TotalPayable(){
  return(
    <>
      <div className="total-amount">Total Payable: $XXX</div>
      <div className="currency-caution">
        <i className="fa-solid fa-circle-info caution"></i>
        <div className="about-currency">
          <h3 className="currency-charged">You will be charged in AED</h3>
          <p className="currency-description">The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
        </div>
      </div>
    </>
  )
}

export default TotalPayable;