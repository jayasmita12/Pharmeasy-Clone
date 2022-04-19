function navbar(){

    return ` <header id="nav-head">
    <div class="navbar">
      <div class="navbar-top">
        <div class="navbar-logo">
          <a href="./index.html"><img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="Pharmeasy logo" /></a>
        </div>
        <div class="navbar-search">
          <div id="search-box">
            <select name="pincode" id="city">
              <option value="select-city">Select Pincode</option>
            </select>
            <input class="search-input" type="text" placeholder="Search for Medicine / Healthcare Product @18% off"
              style="border-left: 1px solid grey;height: 20px;" />
            <i class="fas fa-search" style="color: grey;padding-left:10%;font-size: 22px;"></i>
          </div>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-tab">
          <div id="tab-nav">

            <a href="/html/medicine.html"><button class="tab1" display="_blank">Order Medicines</button></a>

            <a href="/html/healthcaredata.html"><button class="tab1">Healthcare Products</button></a>
            <a href="/html/labtest.html"><button class="tab1">Lab Tests</button></a>
            <a href="/html/RTPCR.html"><button class="tab1">RTPCR</button></a>


          </div>
        </div>
        <div class="navbar-button">
          <div id="btn-nav">
           <a href="/html/offers.html"><button class="tab2">
            <img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="">
            Offers</button></a>
           <a href="/html/signup.html"><button class="tab2">
            <img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="">
            Login/ Signup</button></a>
            <button class="tab2">
              <a href="/html/cart.html" style="text-decoration: none; color: white;"><img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="">
              Cart</button></a>
             
          </div>
        </div>
      </div>
    </div>
  </header> `

}

export default navbar ;