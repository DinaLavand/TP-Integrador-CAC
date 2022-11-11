const precio = 200;
let estudiante = 0.8;
let trainee = 0.5;
let junior= 0.15;
let totalPagar;
let cantidad = document.querySelector("#cantidad");

let resumen = document.querySelector("#btnResumen");
resumen.addEventListener("click", calculoValorTicket);
let total = document.querySelector("#btnBorrar");
total.addEventListener("click", borrarTotal);

function calculoValorTicket(evento) {
    evento.preventDefault();

    if (Number(cantidad.value)) {
        let categoria = document.querySelector("#categoriaSelect");
        
        switch (categoria.value) {
            case "EntradaGeneral": {
                totalPagar = precio * cantidad.value;
                break;
            }
            case "Estudiante": {
                totalPagar = precio * cantidad.value * estudiante;
                break;
            }
            case "Trainee": {
                totalPagar = precio * cantidad.value * trainee;
                break;
            }
            case "Junior": {
                totalPagar = precio * cantidad.value * junior;
                break;
            }
        }

        document.querySelector("#totalPagar").innerHTML = `Total a pagar: $${totalPagar}`;
       
    } else {
        document.querySelector("#cantidad").style.border = "2px solid red";
        cantidad.value = "";
        cantidad.placeholder = "Ingrese una cantidad"; 
        alert("Ingresar una cantidad");
       
    }
    
}

function borrarTotal() {

    document.querySelector("#totalPagar").textContent = "Total a pagar:";

    let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector("totalPagar" + form[i].className);
    }
    alert("¿Estás seguro? se borraran los datos ingresados")
}

/*function validar() {
    
    document.querySelector("#nombre").style.border = "2px solid red";
    nombre.value = "";

    document.querySelector("#apellido").style.border = "2px solid red";
    apellido.value = "";

    document.querySelector("#email").style.border = "2px solid red";
    email.value = "";


    alert("Completar los campos en rojo");

    borrarTotal(evento);
}*/