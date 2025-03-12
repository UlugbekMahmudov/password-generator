const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordBtn = document.getElementById("password-btn");
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")

passwordBtn.addEventListener("click", function() {
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < 15; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }
    
    passwordOne.textContent = password1;
    passwordTwo.textContent = password2;
})

passwordOne.addEventListener("click", function() {
    navigator.clipboard.writeText(this.value).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
})

passwordTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(this.value).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
})








