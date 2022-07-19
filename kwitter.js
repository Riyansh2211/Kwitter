var username= document.getElementById("username").value;

function login(){

localStorage.setItem("User", username);
window.location="kwitter_room.html";
}