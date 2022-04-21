
const createTopNav = () => {
let topnav= document.querySelector('.topnav')


topnav.innerHTML =`
    <div class = "nav">
    <div class="nav-items">
      <div class="search">
      <input type="text" class="search-box" placeholder="search product">
      <button class="search-btn">search</button>
      <a href="index.html">Home</a>
      <a href="Login.html"><i class="fa-solid fa-user"></i></a>
      <a href="wishlist.html"><i class="fa-solid fa-list"></i></a>
      </div>
    </div>
    <div class="center">
      <ul id = "menutabs">
         <li><a href="navigation/house-plants0.html">house plants</a></li>
         <li><a href="navigation/succulents0.html">succulents</a></li>
         <li><a href="navigation/planters.html" target="_blank">planters</a></li>
         <li><a href="navigation/plant-accessories.html" target="_blank">plant accessories</a></li>
       </ul>
    </div>
    </div>
  `;
}

createTopNav();
