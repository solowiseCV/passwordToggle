
let eyeIcon = document.getElementById("icon");
let password = document.getElementById("password");

eyeIcon.addEventListener("click",()=>{
    if(password.type =="password"){
        password.type = "text"
        eyeIcon.src = "images/eye-close.png"
    }else{
        password.type ="password"
        eyeIcon.src = "images/eye-open.png"
    }
})