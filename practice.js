
// ADD YOUR FIREBASE LINKS
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

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


