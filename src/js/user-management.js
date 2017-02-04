/*
 * Handle user registration and login
 * 
 * As an anonymous user I want to click a register button in order to have an account
 * As a registered user I want to click a login button in order to open a session
 * As a loged user I want to click a logout button in order to close a session
 * As a registeres user I want to click a delete account button in order to cancel my account
 * 
 * These stories are going to be mocked using HTML5 Web Storage API
 * https://www.w3.org/TR/webstorage/
 * 
 * Local Storage to handle registered user
 * Session Storage to handle loged user
 * 
 * TODO: login user after register
 * TODO: logout user after unregister
 * TODO: avoid login if user is not registered
 * 
 */

// Local Storage detection
(function() {
  if(typeof(Storage) === 'undefined') {
    alert("No HTML5 Storage Support");
  }
})();

// Return true if user has been registered
function isUserRegistered() {
  return localStorage.hasOwnProperty('user');
}

// On register button click
function onUserRegister() {
  if(isUserRegistered()) {
    localStorage.removeItem('user');
  } else {
    localStorage.setItem('user', 'user@example.com');
  }
  setRegisterButtonStyle();
}

// Change button icon based on local storage
function setRegisterButtonStyle() {
  if(isUserRegistered()) {
    $("#register > span.glyphicon").removeClass("glyphicon-plus");
    $("#register > span.glyphicon").addClass("glyphicon-minus");
    return;
  }
  $("#register > span.glyphicon").removeClass("glyphicon-minus");
  $("#register > span.glyphicon").addClass("glyphicon-plus");
}






function isUserLoged() {
  return sessionStorage.hasOwnProperty('user');
}
function onUserLogin() {
  if(isUserLoged()) {
    sessionStorage.removeItem('user');
  } else {
    sessionStorage.setItem('user', 'user@example.com');
  }
  setLoginButtonStyle();
}
function setLoginButtonStyle() {
  if(isUserLoged()) {
    $("#login > span.glyphicon").removeClass("glyphicon-log-in");
    $("#login > span.glyphicon").addClass("glyphicon-log-out");
    return;
  }
  $("#login > span.glyphicon").removeClass("glyphicon-log-out");
  $("#login > span.glyphicon").addClass("glyphicon-log-in");
}



// When document is ready
$(document).ready(function() {
  setRegisterButtonStyle();
  setLoginButtonStyle();
  $("#register").on("click", onUserRegister);
  $("#login").on("click", onUserLogin);
});
