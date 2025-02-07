//OBJETOS
//Estrutura que representa alguma coisa
//uma coleção de dados e funcionalidades
//Carro - Caracteristicas ( propriedades ) - métodos/funções (comportamentos)



//criando um objeto vazio
const obj = {}
console.log(obj)

//objeto com prorpiedades e metodos
const user = {
    email: "nrib.joaovictor@gmail.com", //(chave:valor)
    age: 18,
    name: {
        firstName: "Rodrigo",
        Surname: "Gonçalves"
    },
    adress:{
        street: "Rua X",
        number: 23,
        city: "São Paulo"
    },
    message: function(){
        console.log("oi,Rodrigo")
    }
}

//acessando propriedades e métodos usando a notação de ponto
console.log(user.email)

//acessando propriedade de objetos
console.log(user.name.firstName)

//Executando o método do objeto
user.message()

//outra alternativa para acessar o objeto - Colchetes
console.log(user["email"])
console.log(user["name"]["firstName"])
user["message"]()



const User_1 = {
    name: "João",
    message: function(){
        //console.log(`olá,${User_1.name}`) or
        console.log(`Olá, ${this.name}`)
    },
}
User_1.message()


const product = {
    name: "Teclado",
    quantity: 100,
}
//acessando a propriedade do objeto
console.log(product.name)

//atualizando o valor de uma propriedade
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

product.name = "Mouse"
console.log(product.name)

//colchetes
product["quantity"] = 80
console.log(product)


//OPTIONAL CHAINING (?.) SE A PROPRIEDADE OU FUNÇÃO CHAMADA FOR NULL
//UNDEFINED NÃO IRÁ GERAR UMA MENSAGEM DE ERRO, E IRÁ RETORNAR UNDEFINED
//OU NULL

const user_2={
    id: 1,
    name: "João",
    /*
    adress:{
        street:"Av.Brasil",
        city:"Vitória",
        geo:{
            latitude: 47.808,
            longitude: 17.5674,
        },
    },
    */

    /*
    message: function(){
        console.log(`Olá, ${this.name}`)
    }
    */
}
//console.log(user_2.adress.street) //RETORNA ERRO
//OPTIONAL CHAINING :
console.log(user_2?.adress?.street) //RETORNA UNDEFINED

user_2.message?.()




//OPERADOR DE COALESCÊNCIA NULA (??) - OPERADOR LÓGICO QUE RETORNA SEU
//OPERANDO DO LADO DIREITO QUANDO O OPERANDO DO LADO ESQUERDO É NULL OU 
//UNDEFINED. CASO CONTRÁRIO RETORNA O OPERANDO DO LADO ESQUERDO

let content = null
console.log(content ?? "conteúdo padrão") //exibiu o lado direito por ser null
let content_1 = "Olá, João"
console.log(content_1 ?? "conteúdo padrão") //exibiu o lado esquerdo

const user_3 = {
    name : "João",
    picture: undefined,
}
console.log(user_3.picture ?? "default.png")

