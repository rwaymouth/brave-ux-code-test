

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

function validateUserName(entry) {
    
}

function validatePassword(entry) {

}

var toggle = document.querySelector('.eye--icon');

window.onload = function() {
    toggle.addEventListener('click', function(){togglePassword('#password')}, false);
}


