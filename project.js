const celsiusInput = document.querySelector('#celsius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')
const Tyhjenna = document.querySelector('#tyhjenna > button')

function ruondnum(num) {
    return Math.round(num*100)/100;
}

function tempconvertCtoFandK() {
    const CelsiusTemp = Number(celsiusInput.value);
    const FahrenheitTemp = CelsiusTemp * (9/5) + 32;
    const KelvinTemp = CelsiusTemp + 273.15;
    fahrenheitInput.value = ruondnum(FahrenheitTemp)
    kelvinInput.value = ruondnum(KelvinTemp)
}

function tempconvertFtoCandK() {
    const FahrenheitTemp = Number(fahrenheitInput.value);
    const CelsiusTemp = (FahrenheitTemp - 32) * 5/9;
    const KelvinTemp = (FahrenheitTemp - 32) * 5/9 + 273.15;
    celsiusInput.value = ruondnum(CelsiusTemp)
    kelvinInput.value = ruondnum(KelvinTemp)
}

function tempconvertKtoFandC() {
    const KelvinTemp = Number(kelvinInput.value);
    const FahrenheitTemp = 9/5 * (KelvinTemp - 273.15) + 32;
    const CelsiusTemp = KelvinTemp - 273.15;
    fahrenheitInput.value = ruondnum(FahrenheitTemp)
    celsiusInput.value = ruondnum(CelsiusTemp)
}

function tyhja() {
    celsiusInput.value = ''
    fahrenheitInput.value = ''
    kelvinInput.value = ''
}

function main() {
celsiusInput.addEventListener('input', tempconvertCtoFandK);
fahrenheitInput.addEventListener('input', tempconvertFtoCandK);
kelvinInput.addEventListener('input', tempconvertKtoFandC);
Tyhjenna.addEventListener('click', tyhja);
}

main();

