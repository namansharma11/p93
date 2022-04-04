// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzU75F8-jLrzVXEp5jQOxGhaeHXT9MVhY",
    authDomain: "p-93-75caf.firebaseapp.com",
    projectId: "p-93-75caf",
    storageBucket: "p-93-75caf.appspot.com",
    messagingSenderId: "405358216267",
    appId: "1:405358216267:web:2d35b64ff49fd6d22b39ce"
  };
  
  // Initialize Firebase
   InitializeApp(firebaseConfig);

function addRoom()
{
 room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "Lets Chat.index.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "Lets Chat.html";
} 
 