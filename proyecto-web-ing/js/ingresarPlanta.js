
nombreFamilias = ["LIMONERO", "MANZANO", "NARANJO", "CEREZO", "MANDARINO", "DURAZNERO"]


const familias = document.getElementById('selectFamilia');
const btnIngresarPlanta = document.getElementById('ingresarPlanta');
const btnIngresarFamilia = document.getElementById('ingresarFamilia');

const agregarFamiliasOpt = () => {

    nombreFamilias.forEach(nombre => {
        const option = document.createElement('option');
        option.text = nombre;
        familias.appendChild(option);
    });

}

const removeFamiliasOpt = () => {

    let i, x = familias.options.length - 1; 
    for (i = x; i >= 0; i--) { 
        familias.remove(i); 
    }


}
agregarFamiliasOpt();




btnIngresarPlanta.addEventListener('click', (e) => {
    e.preventDefault();

    const codigo = document.getElementById('codigoPlanta').value;
    const fase = document.getElementById('fasePlanta').value;
    const familia = document.getElementById('selectFamilia').value;
    const almacen = document.getElementById('nombreAlmacen').value;
    const fila = document.getElementById('fila').value;
    const columna = document.getElementById('columna').value;

    if (codigo === '' || fase === '' || familia === '' || almacen === '' || fila === '' || columna === '') {
        alert('Todos los campos son obligatorios');
    }

    else {
        alert('Planta ingresada correctamente');
        window.location.href = 'index.html';
    }
});




btnIngresarFamilia.addEventListener('click', (e) => {
    e.preventDefault();

    const nombreComun = document.getElementById('nombreComunFamilia').value;
    const nombreCientifico = document.getElementById('nombreCientificoFamilia').value;
    const cuidados = document.getElementById('cuidadosFamilia').value;
    const suelo = document.getElementById('sueloFamilia').value;
    const tamaño = document.getElementById('tamañoFamilia').value;
    const reproduccion = document.getElementById('reproduccionFamilia').value;
    const duracion = document.getElementById('duracionFamilia').value;

    if (nombreComun === '' || nombreCientifico === '' || cuidados === '' || suelo === '' || tamaño === '' || reproduccion === '' || duracion === '') {
        alert('Todos los campos son obligatorios');
    }
    if (familiaExistente(nombreComun.toUpperCase())) {
        alert('Familia ya existe');
    }
    else {
        nombreFamilias.push(nombreComun.toUpperCase());
        removeFamiliasOpt();
        agregarFamiliasOpt();
     
        alert('Familia ingresada correctamente');
        document.getElementById('cerrarModal').click();
    }



});

familiaExistente = (nombreComun) => {

    nombreFamilias.forEach(nombre => {
        if (nombre === nombreComun) {
            return true;
        }
    });
}

/* 



    
function agregarPlanta(){
    const familiaIngresada = document.getElementById("nombreComun").value.toUpperCase()
    const formularioPlanta = document.querySelector('#formularioPlanta')
    const formularioFamilia = document.querySelector('#formularioFamilia')
    const ingresoCorrectoPlanta = document.querySelector('#ingresoCorrectoPlanta')

    if(nombreFamilias.includes(familiaIngresada)){
        alert("Se ingresó correctamente la planta")
        ingresoCorrectoPlanta.style.display = ''
    }
    else{
        alert("La familia " + familiaIngresada + " no existe, ingrese la familia, por favor")
        formularioPlanta.style.display = 'none'
        formularioFamilia.style.display = ''
    }
}

function agregarFamilia(){
    const familiaIngresada = document.getElementById("nombreFamilia").value.toUpperCase()
    const ingresoCorrectoFamilia = document.querySelector('#ingresoCorrectoFamilia')
    const formularioFamilia = document.querySelector('#formularioFamilia')
    const formularioPlanta = document.querySelector('#formularioPlanta')

    if(familiaIngresada == '' || nombreFamilias.includes(familiaIngresada)){
        alert("Nombre de familia incorrecto")
    }
    else{
        ingresoCorrectoFamilia.style.display = ''
        formularioFamilia.style.display = 'none'
        formularioPlanta.style.display = ''
    }

}
 */