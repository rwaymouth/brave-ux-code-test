

function togglePassword(target) {
   var input =  document.querySelector(target);
   var type = input.attributes.type.nodeValue;

   if (type === 'password') {
       type = 'text'; 
   } else {
        type = 'password';
   }
   input.attributes.type.nodeValue = type;
}

function toggleMenu(target) {
    var target = document.querySelector(target);
    target.classList.toggle('active');
}

function validateUserName(entry) {
    
}

function validatePassword(entry) {

}

var pwToggle = document.querySelector('.eye--icon');
var menuToggle = document.querySelector('.nav--toggle');

window.onload = function() {
    pwToggle.addEventListener('click', function(){togglePassword('#password')}, false);
    menuToggle.addEventListener('click', function(){toggleMenu('.app--nav')}, false);
}


