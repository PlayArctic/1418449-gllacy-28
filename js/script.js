var modalwrapper = document.querySelector(".modal-wrapper");
var modaldarkwrapper = document.querySelector(".modal-dark-wrapper");

var login = document.querySelector(".login");
var loginpopup = document.querySelector(".login-form");

var search = document.querySelector(".search");
var searchpopup = document.querySelector(".search-field");

var feedback = document.querySelector(".feedback-btn");
var feedbackpopup = document.querySelector(".feedback-form");

var cart = document.querySelector(".cart");
var cartpopup = document.querySelector(".cart-field");


login.addEventListener("click", function (evt) {
       evt.preventDefault();
       loginpopup.classList.add("visually-show");
       modalwrapper.classList.add("visually-show");

});


search.addEventListener("click", function (evt) {
       evt.preventDefault();
       searchpopup.classList.add("visually-show");
       modalwrapper.classList.add("visually-show");

});


if (feedback) {
       feedback.addEventListener("click", function (evt) {
              evt.preventDefault();
              feedbackpopup.classList.add("visually-show");
              modaldarkwrapper.classList.add("visually-show");

       });
}


if (cartpopup) {
       cart.addEventListener("click", function (evt) {
              evt.preventDefault();
              cartpopup.classList.add("visually-show-inlblock");
              modalwrapper.classList.add("visually-show");

       });
}



       modalwrapper.addEventListener("click", function () {
              loginpopup.classList.remove("visually-show");
              searchpopup.classList.remove("visually-show");
              if (feedbackpopup) {
                     feedbackpopup.classList.remove("visually-show");
              }
              if (cartpopup) {
                     cartpopup.classList.remove("visually-show-inlblock");
              }
              modalwrapper.classList.remove("visually-show");
       });


       if (modaldarkwrapper) {
              modaldarkwrapper.addEventListener("click", function () {
                     feedbackpopup.classList.remove("visually-show");
                     modaldarkwrapper.classList.remove("visually-show");
              });
       }