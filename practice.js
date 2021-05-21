var firebaseConfig = {
    apiKey: "AIzaSyDWejzX8Bh6oxJO-vOaCQ3h91NcyuKoZh8",
    authDomain: "projet-c-94.firebaseapp.com",
    databaseURL: "https://projet-c-94-default-rtdb.firebaseio.com",
    projectId: "projet-c-94",
    storageBucket: "projet-c-94.appspot.com",
    messagingSenderId: "748397693871",
    appId: "1:748397693871:web:c037aea5ad6daebf933d5a",
    measurementId: "G-27Z56BE0H1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINK
function addUser() {
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"

    });

}