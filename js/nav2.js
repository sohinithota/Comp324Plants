const createTopNav = () => {
let topnav= document.querySelector('.innertopnav')
  topnav.innerHTML =`
        <nav>
        <ul>
        <li><a href="../home.html"><i class="fa-solid fa-house"></i></a></li>
    <li><a href="search.html"><i class="fa-solid fa-magnifying-glass"></i></a></li>
    <li><a href="../Footer/Login.html"><i class="fa-solid fa-user"></i></a><li>
        <li><a href="../navigation/house-plants.html">house plants</a></li>
        <li><a href="../navigation/succulents.html">succulents</a></li>
        <li><a href="../navigation/planters.html">planters</a></li>
        <li><a href="../navigation/plant-accessories.html">plant accessories</a></li>
    </ul>
    </nav>
    <style>
    
        nav{
        display: grid;
        font size: 200px;
    }
        .nav a{
        float: left;
        text-decoration: none;
        width: 8%;
        text-align: center;
    }

        ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: gray;
    }

        li {
        display: block;
        float: left;
        margin: 0;
        border: 10px white;
    }

        li a {
        display: flex;
        color: black;
        text-align: left;
        padding: 10px;
        text-decoration: none;
    }

        li a:hover {
        background-color: white;
    }
    </style>
        `;

}

createTopNav();
