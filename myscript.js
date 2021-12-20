
let button = document.getElementById('button');//seleziono button richiamando id dell'elemento.

button.addEventListener("click", function(){
    
    let scelta = document.getElementById('select').value;
    let griglia = document.getElementById('ms_griglia');// selezioni div contenitore griglia richiamando la classe.
    griglia.innerHTML = '';
    if(scelta == 1){
        for(i=1; i<=100; i++){
            griglia.innerHTML += `<div class="casella">${i}</div>`;
        }

    }



})

console.log('ciao');