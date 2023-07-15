const bill = document.getElementById("input-bill");
const people = document.getElementById("input-person");
const buttonBill = document.getElementById("button-bill");
const buttonPerson = document.getElementById("button-person");
const reset = document.getElementById("reset");
const zero = document.querySelector(".container-zero");

const inputUno = document.getElementById("button-1")
const inputDos = document.getElementById("button-2")
const inputTres = document.getElementById("button-3")
const inputCuatro = document.getElementById("button-4")
const inputCinco = document.getElementById("button-5")

const arr = [ inputUno, inputDos, inputTres, inputCuatro, inputCinco];

for (let i = 0; i < arr.length; i++) {

    arr[i].addEventListener('click', function() {
        
        if (people.value <= 0) {
            buttonPerson.style.border = '2px solid red';
            this.innerHTML
            zero.style.display = "block";
        }else {
            buttonPerson.style.borderColor = 'transparent';
            zero.style.display = "none";
        }
    });
    
}

   






