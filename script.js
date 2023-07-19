const bill = document.getElementById("input-bill");
const person = document.getElementById("input-person");
const buttonBill = document.getElementById("button-bill");
const buttonPerson = document.getElementById("button-person");
const reset = document.getElementById("reset");
const resetClass = document.querySelector(".reset")
const zero = document.querySelector(".container-zero");
const count = document.getElementById("amount");
const personTotal = document.getElementById("total");

// -------------------------------------------------------------------

const inputUno = document.getElementById("button-1")
const inputDos = document.getElementById("button-2")
const inputTres = document.getElementById("button-3")
const inputCuatro = document.getElementById("button-4")
const inputCinco = document.getElementById("button-5")


// -------------------------------------------------------------------

const arr = [ inputUno, inputDos, inputTres, inputCuatro, inputCinco];


// -------------------------------------------------------------------

for (let i = 0; i < arr.length; i++) {

    arr[i].addEventListener('click', function() {
        
        if (person.value <= 0) {
            buttonPerson.style.border = '2px solid red';
            this.innerHTML
            zero.style.display = "block";
            
        }else {
            buttonPerson.style.borderColor = 'transparent';
            zero.style.display = "none";
        }

    });

}

// -------------------------------------------------------------------

function calcularPorcentaje(porcentaje) {

    let numero= parseFloat(bill.value);
   
    // ---------------------------------

    if (person.value > 0){

        resetClass.style.backgroundColor = 'hsl(172, 67%, 45%)';

        switch (porcentaje) {
            case 5: 

                let ivaCinco = numero * 0.05;
                let totalCinco= numero + ivaCinco;
                let personCinco = totalCinco / person.value;
                // ---------------------------------
                count.innerHTML = totalCinco.toFixed(2);
                personTotal.innerHTML = personCinco.toFixed(2);
                break;

            case 10:

                let ivaDiez = numero * 0.10;
                let totalDiez = numero + ivaDiez;
                let personDiez = totalDiez / person.value;
                // ---------------------------------
                count.innerHTML = totalDiez.toFixed(2);
                personTotal.innerHTML = personDiez.toFixed(2);
                // ---------------------------------
                count.innerHTML = totalDiez.toFixed(2);
                break;

            case 15:

                let ivaQuince = numero * 0.15;
                let totalQuince = numero + ivaQuince;
                let personQuince = totalQuince / person.value;
                // ---------------------------------
                count.innerHTML = totalQuince.toFixed(2);
                personTotal.innerHTML = personQuince.toFixed(2);
                // ---------------------------------
                count.innerHTML = totalQuince.toFixed(2);
                break;

            case 25:

                let ivaVeinteCinco = numero * 0.25;
                let totalVeinteCinco = numero + ivaVeinteCinco;
                let personVeinteCinco = totalVeinteCinco / person.value;
                // ---------------------------------
                count.innerHTML = totalVeinteCinco.toFixed(2);
                personTotal.innerHTML = personVeinteCinco.toFixed(2);
                // ---------------------------------
                count.innerHTML = totalVeinteCinco.toFixed(2);
                break;

            case 50:
                let ivaCincuenta = numero * 0.50;
                let totalCincuenta = numero + ivaCincuenta;
                let personCincuenta = totalCincuenta / person.value;
                // ---------------------------------
                count.innerHTML = totalCincuenta.toFixed(2);
                personTotal.innerHTML = personCincuenta.toFixed(2);
                // ---------------------------------
                count.innerHTML = totalCincuenta.toFixed(2);
                break;

            default:
            console.log('Porcentaje no válido');
        }
    }

    reset.addEventListener('click', function() {
        
        count.innerHTML = '0.00';
        personTotal.innerHTML = '0.00';
        resetClass.style.backgroundColor = 'hsl(186, 14%, 43%)';
    });
}





    





   






