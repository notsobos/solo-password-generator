//self learned about navigator.clipboard.writeText to copy on click
//made it so you dont copy the "copied to clipboard" part too

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOneEl= document.getElementById("passwordOne-el")
let passwordTwoEl= document.getElementById("passwordTwo-el")
let passwordOne= []
let passwordTwo= []
let hasUsed = false
let holdPassword1 = false
let holdPassword2 = false

function generate() {
    calculateFirstPassword()
    calculateSecondPassword()
    passwordOne= []
    passwordTwo= []
    holdPassword1 = false
    holdPassword2 = false

}

function copyPassword1(){
    if (holdPassword1===false) {
        navigator.clipboard.writeText(passwordOneEl.textContent)
        passwordOneEl.textContent = ("Copied to clipboard!")
        holdPassword1 = true
    }

}
function copyPassword2(){
    if (holdPassword2===false){
        navigator.clipboard.writeText(passwordTwoEl.textContent)
        passwordTwoEl.textContent = "Copied to clipboard!"
        holdPassword2 = true
    }
}

    

function calculateFirstPassword(){
    for (let i = 0; i < 15; i++){
        let randomIndex = Math.floor( Math.random() * characters.length)
        passwordOne += characters[randomIndex]
    }
    passwordOneEl.textContent = passwordOne
    

}

function calculateSecondPassword(){
    for (let i = 0; i < 15; i++){
        let randomIndex = Math.floor( Math.random() * characters.length)
        passwordTwo += characters[randomIndex]
    }
    passwordTwoEl.textContent = passwordTwo
}