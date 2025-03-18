#programação orientada a objetos
#jogo
#turno, controle heroi, nome, pontos de vida, ataque

#linguagem de programação orientada a objetos -
#objetos são instacias de classes

#classe 
class Pessoa:
    #descrever atributos(propriedades) e métodos(ações):
    
    #primeiro método - metodo contrutor - init
    #quando está fora de uma classe é uma função, quando está dentro é um método
    def __init__(self,nome,idade) -> None:
        pass
        #none define que o metodo não tem retorno, por padrão. não necessário colocar.
        #self é uma referencia a sua propria classe, porta de acesso para que seja possivel utilizar os metodos e atributos da classe
        self.nome = nome
        self.idade = idade


    def saudacao(self):
        return f"olá, meu nome é {self.nome} e eu tenho {self.idade} anos"

#objeto - instacia dessa classe - criado a partir da classe e respeita os métodos e atributos da classe
pessoa1 = Pessoa("João",21)
mensagem = pessoa1.saudacao()
print(mensagem)

pessoa2 = Pessoa(nome="Rodrigo",idade=22)
mensagem=pessoa2.saudacao()
print(mensagem) 

