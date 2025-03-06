const amount = document.querySelector("#amount")
const button = document.querySelector("button")


//ajustando o valor da despesa e a saída formatada para BRL
amount.addEventListener("input",(event)=>{
    event.preventDefault()
    const Regex = /\D+/g
    const value=Number(amount.value.replace(Regex,""))/100 //necessário passar para centavos
    //caso contrário, ficará adicionando no inicio.
    amount.value=currency(value)
})

function currency(amount){
    amount=amount.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
    })
    return amount
}

const expense = document.querySelector("#expense")
const category = document.querySelector("#category")
const form = document.querySelector("form")  


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const newExpense={
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount:amount.value,
        created_at: new Date(),
    }
    expenseAdd(newExpense)
})

const ul = document.querySelector("ul")
const expenseQuant = document.querySelector("aside header p span")
const expenseTotal=document.querySelector("aside header h2 ")


function expenseAdd(newExpense){
    try{
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        const expenseImg = document.createElement("img")
        expenseImg.setAttribute("src",`img/${newExpense.category_id}.svg`)
        expenseImg.setAttribute("alt", newExpense.category_name)

        const expenseDiv = document.createElement("div")
        expenseDiv.classList.add("expense-info")

        const expenseStrong = document.createElement("strong")
        expenseStrong.textContent=newExpense.expense
        const expenseSpan = document.createElement("span")
        expenseSpan.textContent=newExpense.category_name

        const expenseSpanAmount= document.createElement("span")
        expenseSpanAmount.classList.add("expense-amount")
        expenseSpanAmount.innerHTML=`<small>R$</small>${newExpense.amount.toUpperCase().replace("R$","")}`


        const expenseImgRemove = document.createElement("img")
        expenseImgRemove.classList.add("remove-icon")
        expenseImgRemove.setAttribute("src","img/remove.svg")
        expenseImgRemove.setAttribute("alt","remover")

        expenseDiv.append(expenseStrong,expenseSpan)
        expenseItem.append(expenseImg,expenseDiv,expenseSpanAmount,expenseImgRemove) 
        ul.append(expenseItem) 

        
        expenseImgRemove.addEventListener("click",(event)=>{
            event.preventDefault()
            expenseItem.remove()
            UpdateTotals()
        })
        
        UpdateTotals()

        formClear()
        
    } catch {
        alert("não foi possível atualizar a lista de despesas.")
    }
}


function UpdateTotals(){
    try{
        const items = ul.children

        expenseQuant.textContent =`${items.length} ${items.length>1? "despesas" : "despesa"}`
        
        let total = 0
        for (let item=0;item<items.length; item++){
            const itemAmount = items[item].querySelector(".expense-amount")
            let value = itemAmount.textContent.replace(/[^\d,]/g,"").replace(",",".")
            value=parseFloat(value)
            total+=Number(value)
        }

        //expenseTotal.textContent=Number(currency(total)/100) - NaN

        const symbolBRL = document.createElement("small")
        symbolBRL.textContent="R$"
        total=currency(total).toUpperCase().replace("R$","")

        expenseTotal.innerHTML=""
        expenseTotal.append(symbolBRL,total)



       
    } catch {
        alert("não foi possível atualizar a lista de despesas.")
    }
}

function formClear(){
    expense.value=""
    category.value=""
    amount.value=""

    expense.focus()
}
