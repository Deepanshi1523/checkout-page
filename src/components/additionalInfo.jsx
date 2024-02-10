import "../styles/additionalInfo.css";

function additionalInfo(){
  return (
    <>
      <div>
        <h1 className="additional-heading">Additional information</h1>
        <p className="additional-para">We need a few more details to complete your reservation.</p>
        <div>
          <form>
              <div className="type-select">
                <input type="text" id="name" name="name" placeholder="Input label *" required className="type"/>
                <select name="select" required className="type custom-select">
                  <option value="">Select *</option>
                  <option value="1">+1</option>
                  <option value="44">+44</option>
                  <option value="91">+91</option>
                </select>
              </div>
              <select  name="multi-select" required className="input-multi custom-select">
                <option value="">Multiselect *</option>
                <option value="1">+1</option>
                <option value="44">+44</option>
                <option value="91">+91</option>
              </select>
          </form>
        </div>
        <hr className="my-4 line" />
      </div>
    </>
  )
}

export default additionalInfo;