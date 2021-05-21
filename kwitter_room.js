
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCK_KI64jLGgu2hI-H1mLjoZ6CAnTgvGpQ",
      authDomain: "srestha-kiwtter.firebaseapp.com",
      databaseURL: "https://srestha-kiwtter-default-rtdb.firebaseio.com",
      projectId: "srestha-kiwtter",
      storageBucket: "srestha-kiwtter.appspot.com",
      messagingSenderId: "413112003227",
      appId: "1:413112003227:web:e40d34fdb574c7c607343e",
      measurementId: "G-RT55R5TJ35"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  
    user_name = localStorage.getItem("user_name") ;
    document.getElementById("user_name").innerHTML = "welcome" + "!" ; 
    function addRoom() {
          room_name = document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"

          });
          localStorage.setItem("room_name", room_name) ;
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      //End code
      });});}
getData();
function redirectToRoomName(name)
 { console.log(name); localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
 } 
 function logout()
  { localStorage.removeItem("user_name");
   localStorage.removeItem("room_name"); 
   window.location = "kwitter.html"; 
}