const apiUrl = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL';

const select = document.querySelector('.select');
const inputValor = document.querySelector('.valor');
const btn = document.querySelector('.btn');
const resultado = document.querySelector('.result')

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    conversao();
})


const getApi = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
 
    return data;    
}

const conversao = async() => {
    const data = await getApi();

    var valorEuro =  Number(data.EURBRL.high);
    var valorDolar = Number(data.USDBRL.high);
    var valorBit = Number(data.BTCBRL.high);
 
    var valorConvertido = 0;
    var valorEmReal = inputValor.value;

    const simbEuro = " EUR";
    const simbDolar = "US$ "
    const simBtc = " BTC";

    if (select.value == "euro"){
    valorConvertido = valorEmReal/valorEuro;
    resultado.innerText = valorConvertido.toFixed(2) + simbEuro;
    }

    if (select.value == "dolar"){
    valorConvertido = valorEmReal/valorDolar;
    resultado.innerText = simbDolar + valorConvertido.toFixed(2);
    }

    if (select.value == "bitcoin"){
    valorConvertido = valorEmReal/valorBit;
    resultado.innerText = valorConvertido.toFixed(3) + simBtc;
    }
      
}








