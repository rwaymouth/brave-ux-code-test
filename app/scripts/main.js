

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
    if (entry.length === 0) {
        var originalClass = document.querySelector('#username').parentNode.className;
        var newClass = originalClass + ' error';
        document.querySelector('#username').parentNode.className = newClass;
        return false;
    } else {
        var originalClass = document.querySelector('#username').parentNode.className;
        var newClass = originalClass.replace(' error', '');
        document.querySelector('#username').parentNode.className = newClass;
        return true;
    }    
}

function validatePassword(entry) {
    if (entry.length < 6 || entry.match(/[A-Z]/) < 0 || entry.match(/[^a-zA-Z\d\s:]/) < 0) {
        var originalClass = document.querySelector('#password').parentNode.className;
        var newClass = originalClass + ' error';
        document.querySelector('#password').parentNode.className = newClass;
        return false;
    } else {
        var originalClass = document.querySelector('#password').parentNode.className;
        var newClass = originalClass.replace(' error', '');
        document.querySelector('#password').parentNode.className = newClass;
        return true;
    }    
}

var pwToggle = document.querySelector('.eye--icon');
var menuToggle = document.querySelector('.nav--toggle');
var submit = document.querySelector('.brave-ux--button');

window.onload = function() {
    pwToggle.addEventListener('click', function(){togglePassword('#password')}, false);
    menuToggle.addEventListener('click', function(){toggleMenu('.app--nav')}, false);
    submit.addEventListener('click', function(){
        var userName = document.querySelector('#username').value;
        var password = document.querySelector('#password').value;
        var validName = validateUserName(userName);
        var validPass = validatePassword(password);
        if (!validName || !validPass) {
            var message = "Your username or password wasn't recognized.";
            var classes = 'error';
        } else {
            var message = "Succes!";
            var classes = 'success';
        }
        document.querySelector('.modal--message').innerHTML = message;
        document.querySelector('.app--modal').className = 'app--modal ' + classes;
        
        window.setTimeout(function(){
            document.querySelector('.app--modal').className = 'app--modal hidden';
        }, 3000)
    })
}


