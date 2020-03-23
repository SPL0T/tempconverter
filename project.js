const celsiusInput = document.querySelector('#celsius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')

function tempconvertCtoFandK() {
    const CelsiusTemp = Number(celsiusInput.value);
    const FahrenheitTemp = CelsiusTemp * (9/5) + 32;
    const KelvinTemp = CelsiusTemp + 273.15;
    fahrenheitInput.value = FahrenheitTemp
    kelvinInput.value = KelvinTemp
}

function tempconvertFtoCandK() {
    const FahrenheitTemp = Number(fahrenheitInput.value);
    const CelsiusTemp = (FahrenheitTemp - 32) * 5/9;
    const KelvinTemp = (FahrenheitTemp - 32) * 5/9 + 273.15;
    celsiusInput.value = CelsiusTemp
    kelvinInput.value = KelvinTemp
}

function tempconvertKtoFandC() {
    const KelvinTemp = Number(kelvinInput.value);
    const FahrenheitTemp = 9/5 * (KelvinTemp - 273.15) + 32;
    const CelsiusTemp = KelvinTemp - 273.15;
    fahrenheitInput.value = FahrenheitTemp
    celsiusInput.value = CelsiusTemp
}

celsiusInput.addEventListener('input', tempconvertCtoFandK);
fahrenheitInput.addEventListener('input', tempconvertFtoCandK);
kelvinInput.addEventListener('input', tempconvertKtoFandC);