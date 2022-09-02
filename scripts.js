const button = document.getElementById('button')
const select = document.getElementById('currency-option')

const dolar = 5.15
const euro = 5.20
const bitcoin = 115055.00

const convertValues = () => {
const input = document.getElementById('input').value
const realValue = document.getElementById('real-value')
const currencyValue = document.getElementById('currency-value')
const currencyName = document.getElementById('currency-name')

realValue.innerHTML =new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input);

if(select.value === '€ Euro'){
   
    currencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input/euro);
    currencyName.innerHTML = 'Euro'
    imgCurrency.src = "./assets/euro.png"
    
}   

if(select.value === 'US$ Dólar americano'){
    
    currencyValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input/dolar);
    currencyName.innerHTML = 'Dólar Americano'
    imgCurrency.src = "./assets/estados-unidos (1) 1.png"
    } 

if(select.value === '₿ Bitcoin'){
    
        currencyValue.innerHTML = (`${(input/bitcoin).toFixed(4)} BTC`);
        currencyName.innerHTML = 'Bitcoin'
        imgCurrency.src = "./assets/bitcoin.png"
        } 


}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const imgCurrency = document.getElementById('img-eua')
    const currencyValue = document.getElementById('currency-value')
    const input = document.getElementById('input').value

if(select.value === '€ Euro'){
   
    currencyName.innerHTML = 'Euro'
    imgCurrency.src = "./assets/euro.png"
    currencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input/euro);
}   

if(select.value === 'US$ Dólar americano'){
    
    currencyValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input/dolar);
    currencyName.innerHTML = 'Dólar Americano'
    imgCurrency.src = "./assets/estados-unidos (1) 1.png"
    } 

if(select.value === '₿ Bitcoin'){
    
        currencyValue.innerHTML = (`${(input/bitcoin).toFixed(4)} BTC`);
        currencyName.innerHTML = 'Bitcoin'
        imgCurrency.src = "./assets/bitcoin.png"
        } 
   
}



button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)