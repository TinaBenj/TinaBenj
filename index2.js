const greeting=document.getElementById("greeting")
greeting.style.textAlign ="center"
greeting.style.marginTop = "50px"
const username = window.prompt("what's your name?", "Tina")
greeting.innerHTML = "Welcome to my website, " + username + "!"