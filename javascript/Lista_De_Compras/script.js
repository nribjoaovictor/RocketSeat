const ul = document.querySelector("ul")

const input_NovosItens = document.querySelector(".NovosItens")
const form_submit = document.querySelector(".input")
const delete_all = document.querySelector(".delete")

delete_all.addEventListener("click",()=>{
    const all_li = document.querySelectorAll("li")
    all_li.forEach((li) => {
        li.remove()
    });
})


ul.addEventListener("scroll",()=>{
    ul.scrollTo({
        behavior: "smooth"
    })
})


form_submit.addEventListener("submit",(event)=>{
    event.preventDefault()
    submit()
    input_NovosItens.value=""
})

function submit (){
    const li = document.createElement("li")
    const span_item = document.createElement("span")
    const span_delete = document.createElement("span")
    const label = document.createElement("label")
    const input_checkBox = document.createElement("input")
    const span_slider = document.createElement("span")


    li.className="itens"
    span_item.className="item"
    span_delete.className="material-symbols-outlined"
    span_delete.textContent="delete"
    label.className="switch"
    input_checkBox.type="checkbox"
    input_checkBox.className="checkBox"
    span_slider.classList="slider round"

    span_item.innerHTML=input_NovosItens.value

    label.append(input_checkBox,span_slider)
    li.append(label,span_item,span_delete)
    ul.append(li)


    span_delete.addEventListener("click",()=>{
        li.remove()
    })    
}




