// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgEzgYOKZD6D-3uMCMFcI41UF9-k9DAiY",
    authDomain: "plantshopping-bac7d.firebaseapp.com",
    projectId: "plantshopping-bac7d",
    storageBucket: "plantshopping-bac7d.appspot.com",
    messagingSenderId: "1098520286327",
    appId: "1:1098520286327:web:e69c45f951961b909ce272",
    measurementId: "G-30V8HXB42S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

export function createFirebase() {
    try {
        const docRef = addDoc(collection(db, "users"), {
            FirstName: document.getElementById("fname1").value,
            lastName: document.getElementById("lname").value,
            orderNum: document.getElementById("ordernum").value,
            email: document.getElementById("email").value,
            problem: document.getElementById("subject").value
        });
        alert("Document written with ID: ");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export function Auth() {

    signInWithEmailAndPassword(auth, document.getElementById("emailAuth").value, document.getElementById("pswAuth").value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            alert(document.getElementById("emailAuth").value + " " + " Signed in!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
        });
}
export function LoginAuth()
{
    const pas1 = document.getElementById("psw").value;
    const pas2 = document.getElementById("psw-repeat").value;

    if (pas1.match(pas2))
    {

        createUserWithEmailAndPassword(auth,document.getElementById("emailRegister").value, pas1)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                // ..
            });
    }
    else
        alert("error passwords dont match");

}