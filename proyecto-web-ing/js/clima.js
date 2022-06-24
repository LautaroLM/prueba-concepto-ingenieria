/* ============== Botones (ALERTA TEMPRANA) ============== */
const alertaDesc = document.querySelector('#alertaDescription');
const alertaTitulo = document.querySelector('#alertaTitulo');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

/* ====== Títulos de dias ======= */
const refday2 = document.querySelector('#day2');
const refday3 = document.querySelector('#day3');
const refday4 = document.querySelector('#day4');
const refday5 = document.querySelector('#day5');
const refday6 = document.querySelector('#day6');

/* ======== Temp mínima , máxima, description ========= */

const datePrincipal = document.querySelector('#date');
const descripPrincipal = document.querySelector('#description');
const tempPrincipal = document.querySelector('#temperature');
const pressurePrincipal = document.querySelector('#pressure');
const humidityPrincipal = document.querySelector('#humidity');




const tempMin2 = document.querySelector('#temp-min-2');
const tempMax2 = document.querySelector('#temp-max-2');
const descMorn2 = document.querySelector('#desc-morning-2');
const descAft2 = document.querySelector('#desc-afternoon-2');

const tempMin3 = document.querySelector('#temp-min-3');
const tempMax3 = document.querySelector('#temp-max-3');
const descMorn3 = document.querySelector('#desc-morning-3');
const descAft3 = document.querySelector('#desc-afternoon-3');

const tempMin4 = document.querySelector('#temp-min-4');
const tempMax4 = document.querySelector('#temp-max-4');
const descMorn4 = document.querySelector('#desc-morning-4');
const descAft4 = document.querySelector('#desc-afternoon-4');

const tempMin5 = document.querySelector('#temp-min-5');
const tempMax5 = document.querySelector('#temp-max-5');
const descMorn5 = document.querySelector('#desc-morning-5');
const descAft5 = document.querySelector('#desc-afternoon-5');

/*  =================  ICONS  ==================*/
const icon1 = document.querySelector('#icon-1');
const icon2 = document.querySelector('#icon-2');
const icon3 = document.querySelector('#icon-3');
const icon4 = document.querySelector('#icon-4');
const icon5 = document.querySelector('#icon-5');

const icons = [
    document.querySelector('#icon-1'),
    document.querySelector('#icon-2'),
    document.querySelector('#icon-3'),
    document.querySelector('#icon-4'),
    /* document.querySelector('#icon-5'), */
]




/* ========== TYPEWRITER 'SAN MIGUEL' ============ */
const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 200
});

typewriter
    .typeString('San Miguel')
    .pauseFor(200)
    .start();



/* ============= SET TEMP MIN AND MAX ============= */

const fetchDays = () => {

    fetch('https://weatherservices.herokuapp.com/api/weather/')
        .then(response => response.json())
        .then(data => setTemps(data))
}


const setTemps = (data) => {

    tempMin2.innerHTML = `Temp Min: ${data.items[0].forecast.forecast[1].temp_min}  °C`;
    tempMax2.innerHTML = `Temp Max: ${data.items[0].forecast.forecast[1].temp_max} °C`;
    descMorn2.innerHTML = `Morning: ${data.items[0].forecast.forecast[1].morning.description}`;
    descAft2.innerHTML = `Afternoon: ${data.items[0].forecast.forecast[1].afternoon.description}`;
    refday2.innerHTML = `${data.items[0].forecast.forecast[1].date}`;


    tempMin3.innerHTML = `Temp Min: ${data.items[0].forecast.forecast[2].temp_min}  °C`;
    tempMax3.innerHTML = `Temp Max: ${data.items[0].forecast.forecast[2].temp_max} °C`;
    descMorn3.innerHTML = `Morning: ${data.items[0].forecast.forecast[2].morning.description}`;
    descAft3.innerHTML = `Afternoon: ${data.items[0].forecast.forecast[2].afternoon.description}`;
    refday3.innerHTML = `${data.items[0].forecast.forecast[2].date}`;

    tempMin4.innerHTML = `Temp Min: ${data.items[0].forecast.forecast[3].temp_min}  °C`;
    tempMax4.innerHTML = `Temp Max: ${data.items[0].forecast.forecast[3].temp_max} °C`;
    descMorn4.innerHTML = `Morning: ${data.items[0].forecast.forecast[3].morning.description}`;
    descAft4.innerHTML = `Afternoon: ${data.items[0].forecast.forecast[3].afternoon.description}`;
    refday4.innerHTML = `${data.items[0].forecast.forecast[3].date}`;

    tempMin5.innerHTML = `Temp Min: ${data.items[0].forecast.forecast[4].temp_min}  °C`;
    tempMax5.innerHTML = `Temp Max: ${data.items[0].forecast.forecast[4].temp_max} °C`;
    descMorn5.innerHTML = `Morning: ${data.items[0].forecast.forecast[4].morning.description}`;
    descAft5.innerHTML = `Afternoon: ${data.items[0].forecast.forecast[4].afternoon.description}`;
    refday5.innerHTML = `${data.items[0].forecast.forecast[4].date}`;

    tempPrincipal.innerHTML = `<b>Temperature:</b> ${data.items[0].weather.tempDesc}`
    descripPrincipal.innerHTML = `<b>Description:</b> ${data.items[0].weather.description}`
    datePrincipal.innerHTML = `<b>Date:</b> ${data.items[0].forecast.forecast[0].date}`
    pressurePrincipal.innerHTML = `<b>Pressure:</b> ${data.items[0].weather.pressure}`
    humidityPrincipal.innerHTML = `<b>Humidity:</b> ${data.items[0].weather.humidity}`
}
/*  ======================================================================= */


/*  ==================== SET ICON============== */
const fetchIcon = (number, icon) => {

    fetch(`https://weatherservices.herokuapp.com/api/alerts/byDay/${number}`)
        .then(response => response.json())
        .then(data => setIcons(data, icon))
}

const setIcons = (data, icon) => {
    icon.src = iconCod(data.alerts[0].type);

}

const iconCod = (description) => {
    switch (description) {
        case 'AC':
            return './img/animated/thunder.svg';
        case 'AL':
            return './img/animated/cloudy-day-3.svg';
    }
}

for (let i = 0; i < icons.length; i++) {
    fetchIcon(i, icons[i]);
}


/*  ==================== FETCH ALERTA TEMPRANA ============== */
const fecthAlerta = (dia) => {
    fetch(`https://weatherservices.herokuapp.com/api/alerts/byDay/${dia}`)
        .then(response => response.json())
        .then(data => setAlerta(data))
}

const setAlerta = (data) => {
    alertaTitulo.innerHTML = `<b>${data.alerts[0].title}</b>`;
    alertaDesc.innerHTML = `<b>Alerta:</b> ${data.alerts[0].description ? data.alerts[0].description : ''}`;
}

btn0.addEventListener('click', () => {
    fecthAlerta(0);
});

btn1.addEventListener('click', () => {
    fecthAlerta(1);
});

btn2.addEventListener('click', () => {
    fecthAlerta(2);
});

btn3.addEventListener('click', () => {
    fecthAlerta(3);
});



fetchDays();

