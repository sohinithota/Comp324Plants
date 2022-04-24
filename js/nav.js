const createTopNav = () => {
let topnav= document.querySelector('.topnav')


topnav.innerHTML =`
    <div class = "nav">
      <div class="center">
        <div class="nav-items">
          <a href="index.html">Home</a>
          <a href="search.html"><i class="fa-solid fa-magnifying-glass"></i>
          <a href="Login.html"><i class="fa-solid fa-user"></i></a>
          <a href="wishlist.html"><i class="fa-solid fa-list"></i></a>
        </div>
      </div>
    </div>
    <div class="center">

      <ul id = "menutabs">
         <li><a href="navigation/house-plants.html">house plants</a></li>
         <li><a href="navigation/succulents.html">succulents</a></li>
         <li><a href="navigation/planters.html">planters</a></li>
         <li><a href="navigation/plant-accessories.html">plant accessories</a></li>
       </ul>
    </div>
    
  `;
}

createTopNav();
