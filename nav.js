
const createTopNav = () => {
let topnav= document.querySelector('.topnav')
/*

var link = document.createElement('link');
// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'nav.css';
// Get HTML head element to append
// link element to it
document.getElementsByTagName('HEAD')[0].appendChild(link);
*/

topnav.innerHTML =`
    <div class = "nav">
    <a href="#"><img id="logo" src="images/Plantipush.jpg"></a>
    <div class="nav-items">
      <div class="search">
      <input type="text" class="search-box" placeholder="search product">
      <button class="search-btn">search</button>
      <a href="index.html">Home</a>
      <a href="Login.html"><i class="fa-solid fa-user"></i></a>
      <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
      <a href="wishlist.html"><i class="fa-solid fa-list"></i></a>
      </div>
    </div>
    <div class="center">
      <ul id = "menutabs">
         <li><a href="navigation/house-plants.html" target="_blank">house plants</a></li>
         <li><a href="navigation/succulents.html" target="_blank">succulents</a></li>
         <li><a href="navigation/planters.html" target="_blank">planters</a></li>
         <li><a href="navigation/plant-accessories.html" target="_blank">plant accessories</a></li>
       </ul>
    </div>
    </div>
  `;
}

createTopNav();
