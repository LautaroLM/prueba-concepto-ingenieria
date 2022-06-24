//Busca planta a traves del input
function buscarPlanta(){

    const input = document.getElementById("filter").value.toUpperCase();
    console.log(input)

    const cardContainer = document.getElementById('card-lists');

    const cards = cardContainer.getElementsByClassName('card');
    console.log(cards)
    
    for (let i = 0; i < cards.length; i++){
        let title = cards[i].querySelector(".card-body h5.card-title");

        if(title.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";

        }else{
            cards[i].style.display = "none";
        }
    }
    
}

//-------------------------

const btnLimonero = document.querySelector('#btnLimonero');
const btnManzano = document.querySelector('#btnManzano');
const btnNaranjo = document.querySelector('#btnNaranjo');
const btnCerezo = document.querySelector('#btnCerezo');
const btnMandarino = document.querySelector('#btnMandarino');
const btnDuraznero = document.querySelector('#btnDuraznero');
const limonero = document.querySelector('#limonero');
const manzano = document.querySelector('#manzano');
const naranjo = document.querySelector('#naranjo');
const cerezo = document.querySelector('#cerezo');
const mandarino = document.querySelector('#mandarino');
const duraznero = document.querySelector('#duraznero');
const precioTotal = document.querySelector('#total');
const btnIngresarReserva = document.getElementById('ingresarReserva');
var total = {}

function update(select){
    var select = document.getElementById(select)
    var cantidad = select.options[select.selectedIndex]

    return cantidad.value
}

function obtenerPrecioTotal(){
    var cont = 0
    for(var key in total) {
        var value = total[key];
        cont = cont + value
    }

    return cont
}


btnLimonero.addEventListener('click', () => {
    cantidad = update('sctLimonero')
    let precio = parseInt(cantidad) * 150
    total['limonero'] = precio
    
    let text = "Limonero: cant. " + cantidad + " precio = " + precio
    limonero.innerHTML = text
    precioTotal.innerHTML = "Precio total: $" + obtenerPrecioTotal()
    

});

btnManzano.addEventListener('click', () => {
    cantidad = update('sctManzano')
    let precio = parseInt(cantidad) * 150
    total['manzano'] = precio
    console.log(total)
    let text = "Manzano: cant. " + cantidad + " precio = " + precio
    manzano.innerHTML = text
    precioTotal.innerHTML = "Precio total: $" + obtenerPrecioTotal()

});

btnNaranjo.addEventListener('click', () => {
    cantidad = update('sctNaranjo')
    let precio = parseInt(cantidad) * 150
    total['naranjo'] = precio
    let text = "Naranjo: cant. " + cantidad + " precio = " + precio
    naranjo.innerHTML = text
    precioTotal.innerHTML = "Precio total: $" + obtenerPrecioTotal()

});

btnCerezo.addEventListener('click', () => {
    cantidad = update('sctCerezo')
    let precio = parseInt(cantidad) * 150
    total['cerezo'] = precio
    console.log(precio)
    let text = "Cerezo: cant. " + cantidad + " precio = " + precio
    cerezo.innerHTML = text
    precioTotal.innerHTML = "Precio total: $" + obtenerPrecioTotal()

});

btnMandarino.addEventListener('click', () => {
    cantidad = update('sctMandarino')
    let precio = parseInt(cantidad) * 150
    total['mandarino'] = precio
    console.log(precio)
    let text = "Mandarino: cant. " + cantidad + " precio = " + precio
    mandarino.innerHTML = text
    precioTotal.innerHTML = "Precio total: $" + obtenerPrecioTotal()

});

btnDuraznero.addEventListener('click', () => {
    cantidad = update('sctDuraznero')
    let precio = parseInt(cantidad) * 150
    total['duraznero'] = precio
    console.log(precio)
    let text = "Duraznero: cant. " + cantidad + " precio = " + precio
    duraznero.innerHTML = text
    precioTotal.innerHTML = "Precio total: $" + obtenerPrecioTotal()

});



btnIngresarReserva.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(obtenerPrecioTotal())
    if(obtenerPrecioTotal() == 0){
        alert("Debe sumar al carrito al menos una planta")
    }
    else{
        alert("Se hizo la reserva correctamente")
        window.location.href = 'index.html'
    }

    

});


