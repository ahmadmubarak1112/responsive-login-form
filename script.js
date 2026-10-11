const inputEmail = document.getElementById("email");
const inputPass = document.getElementById("password");
const loginBtn = document.querySelector(".sign-in");
const popUpBox = document.querySelector(".pop-up");
const loginForm = document.querySelector("form");

///// EMAIL & PASSWORD
const email = "test123@gmail.com";
const password = "KataSandi123";

const countDown = popUpBox.querySelector(".count-down");
const popUpBtn = popUpBox.querySelector("button");
const overlay = document.querySelector(".overlay");

///// FUNCTION CLOSE POP UP
let interval;

function closePopup() {
        
    clearInterval(interval);

    overlay.classList.remove("show");
    popUpBox.classList.remove("show");

    loginForm.reset();

};

///// FUNCTION SHOW POP UP
function showPopup() {

    overlay.classList.add("show");
    popUpBox.classList.add("show");

    let time = 3;

    countDown.textContent = time;

    ///// 3S INTERVAL TIME POP UP 
    interval = setInterval(function() {

        time--;

        countDown.textContent = time;

        if( time === 0 ) {

            closePopup();
            loginForm.reset();
                
        };  

    }, 1000);
        
};

///// CLOSE POP UP WHEN CLICKED
popUpBtn.addEventListener("click", closePopup);

///// LOGIN BUTTON CLICK AND VALIDATION DATA
loginBtn.addEventListener("click", function(e) {

    e.preventDefault();

    if( inputEmail.value === "" || inputPass.value === "" ) {

        alert("Masukkan email dan password!");
        return;

    } 
    else if( inputEmail.value === email && inputPass.value === password ) {

        showPopup();    
            
    } else {

        alert("Email dan Password yang anda masukkan salah");
        return;

    };

});

///// SHOW MINIMUM PASSWORD CHARACTER WARNING
const minimumPasswordChar = document.querySelector('.min-pass-char');
const showPasswordOn = document.querySelector('.visib-on');
const showPasswordOff = document.querySelector('.visib-off');
const showPasswordIcons = document.querySelectorAll('.show-pass');

inputPass.addEventListener("input", function() {

    if( inputPass.value.length === 0 ) {

        minimumPasswordChar.classList.remove("active");
        showPasswordOn.classList.remove('show');

    }

    else if( inputPass.value.length > 0 && inputPass.value.length < 8 ) {

        showPasswordOn.classList.add('show'); 
        minimumPasswordChar.classList.add("active");
        
    }

    else if( inputPass.value.length >= 8 ) minimumPasswordChar.classList.remove("active");

});

showPasswordIcons.forEach( (showPasswordIcon) => {

    showPasswordIcon.addEventListener('click', () => {

        const passwordAttr = inputPass.getAttribute('type') === 'password' ? 'text' : 'password';
        inputPass.setAttribute('type', passwordAttr);

        if( showPasswordIcon.classList.contains('show') ) {

            showPasswordOn.classList.toggle('show');
            showPasswordOff.classList.toggle('show');

        }

    });

});


