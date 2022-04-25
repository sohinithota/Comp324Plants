const createFooter = () => {
    let bottom= document.querySelector('.bottom')

    bottom.innerHTML =`
  <link rel="stylesheet" href="css/style.css">
  <div class = "bottom">
  
    <table class = centertable >
      <tr>
        <th style = "color:green">About</th>
        <th style = "color:green">Services</th>
        <th style = "color:green">For users</th>
      </tr>

      <tr>
        <td><a href="../Footer/AboutUs.html" >About us</a></td>
        <td><a href="../Footer/shipping.html">Shipping</a></td>
        <td><a href = "../Footer/Login.html">User Login</a></td>
      </tr>

      <tr>
        <td><a href="../Footer/terms.html">Terms & Condition</a></td>
        <td><a href>Services</a></td>
        <td><a href="../Footer/Register.html">User Register</a></td>
      </tr>



      <tr>
        <td><a href="../index.html">Home</a></td>
        <td><a href ="../Footer/compliant.html">Open Dispute</a></td>
        <td><a href>My Carts</a></td>

      </tr>

    </table>
    <aside class = "centerpicture">
      <h6 class="centertable">Our app</h6> <a href="#"  data-abc="true"><img class="img1" src="https://i.imgur.com/nkZP7fe.png" height =25% width=35%></a>
      <a href="#"  data-abc="true"><img class="img1" src="https://i.imgur.com/47q2YGt.png"  height =25% width=35%></a>
    </aside>
    <section class = "centertable">
      <p> © 2022 Plantstill All rights reserved </p>
      <p target="_blank" > <a href="#" data-abc="true">Privacy &amp; Cookies</a> &nbsp; &nbsp; <a href="#" data-abc="true">Accessibility</a> </p>
    </section>
  </div>
    `;
}

createFooter();
