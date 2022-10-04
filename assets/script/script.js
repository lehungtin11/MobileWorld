const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display= "flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display= "none"
})

//-----------------login-form----------------
const loginbtn = document.querySelector('#login-form')
const loginclose = document.querySelector('#login-close')
loginbtn.addEventListener("click",function(){
    document.querySelector('.login-form').style.display= "flex"
})
loginclose.addEventListener("click",function(){
    document.querySelector('.login-form').style.display= "none"
})
//-----------------register-form----------------
const registerbtn = document.querySelector('#register-form')
const registerclose = document.querySelector('#register-close')
registerbtn.addEventListener("click",function(){
    document.querySelector('.register-form').style.display= "flex"
})
registerclose.addEventListener("click",function(){
    document.querySelector('.register-form').style.display= "none"
})
