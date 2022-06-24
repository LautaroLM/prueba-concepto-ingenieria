/*  ============================== MAPA ========================================= */

const btnSucursal1 = document.querySelector('#Sucursal1');
const btnSucursal2 = document.querySelector('#Sucursal2');
const btnSucursal3 = document.querySelector('#Sucursal3');
const btnSucursal4 = document.querySelector('#Sucursal4');

const nombreSucursal = document.querySelector('#nombreSucursal');
const horarioSucursal = document.querySelector('#horarioSucursal');
const telefonoSucursal = document.querySelector('#telefonoSucursal');
const descripcionSucursal = document.querySelector('#descripcionSucursal');


var map = L.map('map').setView([-34.524146041849384, -58.70758055570656], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var sucursal1 = L.marker([-34.524146041849384, -58.70758055570656]).addTo(map);

var sucursal2 = L.marker([-34.534146041849384, -58.72758055570656]).addTo(map);

var sucursal3 = L.marker([-34.529146041849384, -58.71558055570656]).addTo(map);

var sucursal4 = L.marker([-34.536146041849384, -58.71958055570656]).addTo(map);



btnSucursal1.addEventListener('click', () => {
    sucursal1.bindPopup("<b>Sucursal: Todo plantas</b><br>Av. Perón 1232.<br> Lunes a viernes de 9 a 18hs - 1153145499").openPopup();
    nombreSucursal.innerHTML = "<b>Sucursal Todo plantas</b>"
    nombreSucursal.innerHTML = "<b>Ubicación: Perón 1232</b>"
    horarioSucursal.innerHTML = "<b>Horario:</b> Lunes a viernes de 9 a 18hs"
    telefonoSucursal.innerHTML = "<b>Teléfono:</b> 1153145499"
    descripcionSucursal.innerHTML = "<b>Descripción:</b> Entrada de color verde con puerta marron, a 10 metros de la YPF"
});

btnSucursal2.addEventListener('click', () => {
    sucursal2.bindPopup("<b>Sucursal: Jardin pacifico </b><br>San Martín 567.<br> Lunes a viernes de 7.30 a 18hs - 1193145876").openPopup();
    nombreSucursal.innerHTML = "<b>Sucursal Jardin pacifico</b>"
    nombreSucursal.innerHTML = "<b>Ubicación: San Martín 567 </b>"
    horarioSucursal.innerHTML = "<b>Horario:</b> Lunes a viernes de 7.30 a 18hs"
    telefonoSucursal.innerHTML = "<b>Teléfono:</b> 1193145876"
    descripcionSucursal.innerHTML = "<b>Descripción:</b> Sucursal estilo vintage en el centro de la ciudad"
});

btnSucursal3.addEventListener('click', () => {
    sucursal3.bindPopup("<b>Sucursal: Vivero roby</b><br>Corrientes 450.<br>Lunes a viernes de 7.30 a 18hs. Sábado de 9 a 13hs - 1187024710").openPopup();
    nombreSucursal.innerHTML = "<b>Sucursal: Vivero pinocho</b>"
    nombreSucursal.innerHTML = "<b>Ubicación: Corrientes 450</b>"
    horarioSucursal.innerHTML = "<b>Horario:</b> Lunes a viernes de 7.30 a 18hs. Sábado de 9 a 13hs."
    telefonoSucursal.innerHTML = "<b>Teléfono:</b> 1187024710"
    descripcionSucursal.innerHTML = "<b>Descripción:</b> Sucursal de color azul oscuro"
});

btnSucursal4.addEventListener('click', () => {
    sucursal4.bindPopup("<b>Sucursal: El botánico</b><br>.Francia 896.<br>Lunes a sábado de 7.30 a 13hs - 1104593755").openPopup();
    nombreSucursal.innerHTML = "<b>Sucursal El botánico</b>"
    nombreSucursal.innerHTML = "<b>Ubicación: Francia 896</b>"
    horarioSucursal.innerHTML = "<b>Horario:</b> Lunes a sábado de 7.30 a 13hs"
    telefonoSucursal.innerHTML = "<b>Teléfono:</b> 1104593755"
    descripcionSucursal.innerHTML = "<b>Descripción:</b> Sucursal de tipo moderno en el centro de la ciudad"
});



const cargarDatosModal = () => {

    document.getElementById('list-sucursal1').innerText = 'Sucursal Todo Plantas';
    document.getElementById('list-sucursal2').innerText = 'Sucursal Jardin pacifico';
    document.getElementById('list-sucursal3').innerText = 'Sucursal Vivero pinocho';
    document.getElementById('list-sucursal4').innerText = 'Sucursal El botánico';

    document.getElementById('list-sucursal1-result').innerHTML = `
    <b>Sucursal: Todo plantas</b><br>Av. Perón 1232.<br> Lunes a viernes de 9 a 18hs - 1153145499 <br>
    <b>Horario:</b> Lunes a viernes de 9 a 18hs<br>
    `;

    document.getElementById('list-sucursal2-result').innerHTML = `
    <b>Sucursal: Jardin pacifico </b><br>San Martín 567.<br> Lunes a viernes de 7.30 a 18hs - 1193145876 <br>
    <b>Horario:</b> Lunes a viernes de 7.30 a 18hs<br>
    `;

    document.getElementById('list-sucursal3-result').innerHTML = `
    <b>Sucursal: Vivero roby</b><br>Corrientes 450.<br>Lunes a viernes de 7.30 a 18hs. Sábado de 9 a 13hs - 1187024710<br>
    <b>Horario:</b> Lunes a viernes de 7.30 a 18hs. Sábado de 9 a 13hs.
    `;

    document.getElementById('list-sucursal4-result').innerHTML = `
    <b>Sucursal: El botánico</b><br>.Francia 896.<br>Lunes a sábado de 7.30 a 13hs - 1104593755 <br>
    <b>Horario:</b> Lunes a sábado de 7.30 a 13hs
    `;
};

cargarDatosModal();