let firstPageData = 
`
<div class="right-side">
<div class="inputSide">
  <div class="informaiton-container">
      <p class="c-text">CARTHOLDER NAME</p>
    <input type="text" placeholder="e.g.Jane Appleseed" class="name-In" id="userName" onkeyup="fillTheName()">
    <p class="c-text">CART NUMBER</p>
    <input id="userNumber" type="text" placeholder="e.g.1234 5678 9123 0000" class="name-In" onkeyup="containsAlphabet()">
    <p id="f-error" class="primary-error">Wrong format, numbers only</p>
  <div class="centeral">
    <p class="c-text">EXP.DATE (MM/YY)</p>
    <p class="b-text">CVC</p>
  </div>
  <div class="dateInput-container">
    <input type="text" class="month-In" placeholder="MM" id="monthIn" onkeyup="fillTheDate()">
    <input type="text" class="year-In" placeholder="YY" id="yearIn" onkeyup="fillTheYear()">
    
    
    <input type="text" placeholder="e.g.123" class="Num-In" id="cvc" onkeyup="fillCvC()">
    
  </div>
  
  <div class="E-container">
    <p id="s-error" class="primary-error">Cant be blank</p>
    <p id="t-error" class="primary-error">Cant be blank</p>
  </div>

  <div class="btn-container">
    <button id="confirm" class="con-btn">Confirm</button>
  </div>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>  
</div>
`

export let ThanksPage = 
`
<div class="last-con">
<svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
<h2 class="last-header">Thank You</h2>
<p class="last-massage">We've added your cart details</p>
<button class="last-btn">Continue</button>  
</div>
`

