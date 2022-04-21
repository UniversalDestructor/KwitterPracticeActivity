
var firebaseConfig = {

    apiKey: "AIzaSyB37izhoOur1MW8VjSCNblEJ_zkPL1ikPw",
  
    authDomain: "kwitter-practice-activit-ab9f4.firebaseapp.com",
  
    databaseURL: "https://kwitter-practice-activit-ab9f4-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-practice-activit-ab9f4",
  
    storageBucket: "kwitter-practice-activit-ab9f4.appspot.com",
  
    messagingSenderId: "966455047551",
  
    appId: "1:966455047551:web:39be32c0e9ac2fe657564a"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}