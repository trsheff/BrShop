/**
 * Created by 1 on 15.08.2016.
 */
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");//Могу пользоваться любыми селекторами
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-active");
    login.focus();

    if (storage) {
        login.value = storage;
        password.focus();
    }
    else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-active");

});

form.addEventListener("submit", function () {
    if (!login.value || !password.value) {
        event.preventDefault();
        console.log("Enter login or password");
    }
    else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (event) {
    if(event.keyCode === 27){
        if(popup.classList.contains("modal-content-active")){
            popup.classList.remove("modal-content-active");
        }
    }
})