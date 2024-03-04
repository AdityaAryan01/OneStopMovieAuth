import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
        const firebaseConfig = {
          apiKey: "AIzaSyBNJxtZgQ64UNMUuctUQKjQvUX93TIO2RE",
          authDomain: "osm-auth.firebaseapp.com",
          projectId: "osm-auth",
          storageBucket: "osm-auth.appspot.com",
          messagingSenderId: "538945508541",
          appId: "1:538945508541:web:a6ee02a300ee11c88a13d4",
          measurementId: "G-B4DKVTE7CG"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth();
        const provider=new GoogleAuthProvider();
        

        document.getElementById('bttn').addEventListener('click', function(){
            var e=document.getElementById("email").value;
            var p=document.getElementById("password").value;
            createUserWithEmailAndPassword(auth,e,p)
            .then((data) => {
                const signup=data.user;
                console.log(signup);
                alert("welcome to One Stop Moive");
                console.log(signup.email)
               
                
            })
            .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage ="invalid email id or password";
		    console.log(errorMessage);
		    alert(errorMessage);
		  });	
        });


        const GoogleSignIn = document.querySelector('.button');
        const userSignIn = async() => {
        signInWithPopup(auth, provider)
        .then((data) => {
            const user = data.user
            console.log(user);
            const userid=data.user.uid
            var displayName=document.getElementById('username')
            displayName.innerHTML=user.displayName
            var dname=displayName.innerText
           
        });
        }
        GoogleSignIn.addEventListener('click', userSignIn);




        document.querySelector('#loginbttn').addEventListener('click', function(){
            var E=document.getElementById('Email').value;
            var P=document.getElementById('Password').value;
            signInWithEmailAndPassword(auth,E,P)
		    .then((credentials) => {
                const signin = credentials.user;
                console.log(signin);
                var displayname=document.getElementById('signin-name-email')
                var DName=signin.email.split('@');
                displayname.innerHTML=DName
                var DName=signin.email.split('@');
                console.log(signin.email)
              
                alert("welcome to One Stop Movie");
		    })
            .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = "either email or password is incorrect";
		    console.log(errorMessage);
		    alert(errorMessage);
		  });	
        });



var btn=document.querySelector('#login-btn');
btn.addEventListener('click', function btnclick(){
    document.querySelector('.box').style.filter="blur(60px)";
    var x=document.querySelector('.google-box');
    var y=document.querySelector('.box');
    document.querySelector('.header').style.display="none";
    document.querySelector('.header1').style.display="block";   
    x.classList.add('active');  
           
});
document.querySelector('#goback').addEventListener('click',function backbtn(){
    document.querySelector('.box').style.filter="blur(0px)";
    var btt=document.querySelector('.google-box');
    btt.classList.remove('active');
    document.querySelector('.header').style.display="block";
    document.querySelector('.header1').style.display="none"; 
});
