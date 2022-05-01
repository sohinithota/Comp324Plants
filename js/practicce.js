import {createFirebase, getData, LoginAuth} from "../js/auth.js";
import {Auth} from "../js/auth.js";

export function myfunction() {
    const name = document.getElementById("fname1").value;
    alert("Document written with ID: ");

    createFirebase();
    //location.replace("../footer/AboutUs.html");


}
export function createAuth()
{
    location.replace("../footer/AboutUs.html");

    LoginAuth();

}

export function LoginCheck()
{

    Auth();
}

export function LoginData()
{
    getData()
}