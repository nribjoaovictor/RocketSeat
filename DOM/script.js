
//visualizar o conteudo do document
//console.log(document)

//titulo da pagina
//console.log(document.title)

/*
const guest = document.getElementById("guest-2") //seletorID
console.log(guest)
//metodo que tem dentro do document que permite acessar pelo id

//mostra as propriedades do objeto
console.dir(guest)

//acessar o elemento com class
const guestByClass=document.getElementsByClassName("guest")
console.log(guestByClass)
console.log(guestByClass.item(0))
console.log(guestByClass[0])

//selecionar lista de elementos pela tag
const guestByTag = document.getElementsByTagName("li")

//query selector
const guest= document.querySelector("#guest-1")
const guest2=documento.querySelector(".guest-2")
console.log(guest)
console.log(guest2)
*/

/*
const guest = document.querySelector("#guest-1 span")
//retorna o conteudo texto
console.log(guest.textContent)
//usar o . pós o guest do console.log significa que se 
//quer acessar algo da tag ou id ou class presente
*/

/*
const guest = document.querySelector("#guest-1")
//outras formas de retornar o texto
console.log(guest.textContent) //retorna o conteudo visivel e oculto
console.log(guest.innerText) //retorna o texto sem formatação => retorna somente o conteudo visivel
console.log(guest.innerHTML) //retorna parecido com o textcontent so que sem precisar especificar a 
//span no query. => retorna o html
*/

//usar o JS para mudar o estilo 
//const input = document.querySelector("#name")
//classList é uma propriedade para pegar as classes do elemento e adiciona
//input.classList.add("input-error")
//remover a classe
//input.classList.remove("input-error")
//toggle - se existir a classe irá adicionar, se não irá excluir
//input.classList.toggle("input-error")

//const button = document.querySelector("button")
//button.style.background="red"

/*
const guest = document.querySelector("ul")
const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")
guestName.textContent="Diego"
console.log(guestName)
*/

/*

//criar novos elementos - necessário colocar o que se quer declarar
//colocar o nome "diego" dentro da span
guestName.textContent="Diego"

//adicionar dentro de um elemento outro elemento, no caso, span dentro de li
newGuest.append(guestName)
console.log(newGuest)
//append adiciona após o último filho
//se usar o prepend irá adicionar antes do primeiro filho
//ex:
const prepend = document.createElement("span")
prepend.textContent="joão"
newGuest.prepend(prepend)

//append consegue adicionar mais de um elemento de uma vez
//o appendChild é mais simples e permite apenas um por vez


//para adicionar na lista que aparece no html e com a formatação que está o css
guest.append(newGuest)
//foi usado o classList.add mais acima

*/

/*
const input = document.querySelector("input")
//setAttribute("nome" valor)
//pode ser usado para mudar algo relacionado a entrada do usuário
//exemplo, o botao de entrada de dados do usuário
//se eu colocar file no valor, o usuário irá ter que carregar um arquivo
*/

/*
//Eventos
window.addEventListener("load",() => {
    console.log("A página foi carregada")
    //sempre que a pagina for carregada irá aparecer essa mensagem
})
//addEventListener irá ficar observando tudo que acontece com a janela
//primeiro parametro é o evento especifico que se quer
//o segundo é uma função

addEventListener("click",(event)=>{
    event.defaultPrevented() //vai previnir o comportamento padrão
    //console.log(event) //retorna todas as informações do evento
    //console.log(event.target) //retorna o elemento clicado
})
*/

/*
const lista = document.querySelector("ul")
lista.addEventListener("scroll", (event)=>{
    console.log(lista.scrollTop)

    if (lista.scrollTop>300){
        //console.log("Fim da lista")
        lista.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
})
*/

/*
const button = document.querySelector("button")
button.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log()
})
*/


//form.addEventListener("")
//posso passar direto o evento que quero lidar
/*
form.onsubmit= (event) => {
    //usa o on nessa estrutura
    event.preventDefault()
    console.log("você fez submit")
    //evento de submit fica também os inputs, portanto, se apertar enter também irá
    //click é preciso interagir com o mouse e clicar
}
//onsubmit irá usar apenas o ultimo feito se tiver mais de um, mas se for feito da outra forma
//irá realizar todos
*/


/*
const form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault() //impede de ficar recarregando a página
    console.log(form.textContent)
})
*/

//const input = document.querySelector("input")

/*
input.addEventListener("keydown",(event)=>{
    console.log(event)
    //keydown - quando uma tecla é assionada e captura todas as teclas, incluindo crtl,shift,etc
})
*/

/*
input.addEventListener("keypress",(event)=>{
    console.log(event.key)
    //A diferença é que o keypress so captura caracteres(letras,numeros,pontos) e ignora shift,crtl,etc
})
*/


/*
expressões regulares
validaçao de dados
/ \D+ / g
/   /  começa e termina
g = global
*/
/*

/\D /
53A7B5C
\D pegará os apenas os caracteres, não digitos
Nesse caso pegaria apenas o A, pois seria o primeiro

Para que pegue todos é necessário usar a flag g, global
/\D/g

seleciona caracter por caracter
ao usar o + ele pegará caracteres seguidos, sequencia, irá selecionar todos juntos
/\D+/g
*/

/*
USANDO EXPRESSÕES REGULARES NO JS

const input_1 = document.querySelector("input")

input_1.addEventListener("input",(event)=>{
    //console.log(input.value)
    const value=input.value
    const regex = /\D+/g

    //irá retornar as ocorrencias dentros da string
    //console.log(value.match(regex))

    //testa se atende o padrão
    //const isValid= regex.test(value)
    //console.log(isValid)
})
*/

/*
const form_1 = document.querySelector("form")
form_1.addEventListener("submit",(event)=>{
    event.preventDefault()
    const regex = /\D+/g

    //irá mudar os letras por vazio - irá retornar apenas numero
    const value = input.value.replace(regex,"")
    console.log(value)

})
*/

//Debug
/*
encontrar e corrigir erros
breakpoints ou inspecionar
*/

//click fica so no botão
//submit pega o forms tbm 

/*
const formulario = document.querySelector("input")
const submit = document.querySelector("button")
submit.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.textContent)

})

const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit=(event) =>{
    event.preventDefault()
    const value = input.value
    //console.log(value)
    const hasNumberRegex = /\d+/g
    //d minusculo está verificando se tem numero
    if (hasNumberRegex.test(value)){
        alert("O texto contém número, digite corretamente")
    }
    else{
        alert("Cadastrado")
    }
}
*/



