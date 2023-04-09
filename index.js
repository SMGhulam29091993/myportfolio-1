// -----------------ABOUT ME SECTION -------------------------

var titlelinks = document.getElementsByClassName('title-links')
var titlecontents = document.getElementsByClassName('title-contents')

function opentab(title){
    for(titlelink of titlelinks){
        titlelink.classList.remove('active-link')

    }
    for(titlecontent of titlecontents){
        titlecontent.classList.remove('active-contents')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(title).classList.add('active-contents')
}

// ------------------------------MENU--------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// ----------------contactform------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbw4AvFrnKup2aBEWQXGThoiG7wdSBnshwYx3R0cLWZRleYMQcU5dO7ilxntKKzEqxNe/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})