const number_from = document.querySelector("#from")
const number_to = document.querySelector("#to")
const number_number = document.querySelector("#numbers")
const form = document.querySelector("form")


form.addEventListener("submit",(event)=>{
    event.preventDefault()

    const Regex = /\D+/g
    number_from.value=number_from.value.replace(Regex,"")
    number_to.value=number_to.value.replace(Regex,"")

    const numbers={
        numb:parseInt(number_number.value),
        from:parseInt(number_from.value),
        to:parseInt(number_to.value)
    }

    const footer_remove = document.querySelectorAll("footer");
    footer_remove.forEach(footer => footer.remove());
    //não se usa somente o remove(), pelo menos para esse caso - pesquisar mais sobre isso
    verifyError(numbers.from,numbers.to)
    verifyNumber(numbers.numb,numbers.from,numbers.to)
    const list = TurnOn(numbers.from,numbers.to)
    FooterConstruction(list,numbers.numb)
    clear() 
})

function verifyNumber(number,from,to){
    if (number > (to-from)){
        alert ("number is bigger or equal than to less from ")
    } else {
        return true
    }
}

function verifyError(from,to){
    if (from>=to){
        alert ("Number inside from should be bigger than number inside to")
    } else {
        return true
    }
}

function TurnOn(from, to) {
    let number_list = [];
    for (let i = from; i <= to; i++) {
        number_list.push(i);
    }
    for (let i = number_list.length - 1; i >= from; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [number_list[i], number_list[j]] = [number_list[j], number_list[i]];
    }
    return number_list;
}

function clear(){
    number_number.value=""
    number_from.value=""
    number_to.value=""
    number_number.focus()
}

const div = document.querySelector(".footer")
function FooterConstruction(list,number){
    try{
        const footer = document.createElement("footer")
        footer.classList.add("footer_appear")

        for (let i=1; i<=number; i++){
            const span= document.createElement("span")
            span.textContent=`${i}° - ${list[i]}`
            footer.append(span)

        }
        div.append(footer)
        
    } catch{
        alert ("Wasn't possible reproduce the list")
    }
}
