var firebaseConfig = {
      apiKey: "AIzaSyA2f8uLVhy7Ky9RaO8X4Wb2WTK9cgC0dbY",
      authDomain: "kwittertwitter-bdeea.firebaseapp.com",
      projectId: "kwittertwitter-bdeea",
      storageBucket: "kwittertwitter-bdeea.appspot.com",
      messagingSenderId: "706773887732",
      appId: "1:706773887732:web:791b03109f5662b6058ca1"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name= document.getElementById("addroom").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";  
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("User");
      localStorage.removeItem("room_name");
      window.location="kwitter_page.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:username,
      message:msg,
      like:0
      });
      document.getElementById("msg").value=" ";
}