const USD = 6.03
const EUR = 6.25
const GBP = 7.38

const button = document.querySelector("button")
const currency = document.getElementById("currency")
const amount = document.getElementById("amount")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//manipulating the input amount to receive just number
amount.addEventListener("input",()=>{
    const characters=/\D+/g
//D for character,d for number
    amount.value=amount.value.replace(characters,"")
})

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value,USD,"US$")
            break
        case "EUR":
            convertCurrency(amount.value,EUR,"€")
            break
        case "GBP":
            convertCurrency(amount.value,GBP,"£")
            break
        //Break necessary so that the other value isn't used or processed.
    }
})

function convertCurrency(amount,price,symbol){
    try {
        //manipulating the content on description
        description.textContent=`${symbol} 1 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        //isNotANumber
        if (isNaN(total)){
            return alert("POR FAVOR, DIGITE O VALOR CORRETAMENTE")
        }
        result.textContent=formatCurrencyBRL(total).replace("R$","") + " Reais"

        //aplication of the class on footer to show result
        footer.classList.add("show-result")

    } catch (error) {
        footer.classList.remove("show-result")
        alert("NÃO FOI POSSÍVEL CONVERTER. TENTE NOVAMENTE MAIS TARDE")
    }
}

function formatCurrencyBRL(value){
    // formatating the value exit with tolocalestring, necessary to remember that value have be number
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}





