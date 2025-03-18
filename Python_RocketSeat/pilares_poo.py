#abstração,encapsulamento, herança e polimorfismo

#classe de exemplo- classe animal
class animal:
    def __init__(self,nome)->None:
        self.nome = nome

    def andar(self):
        print(f"O animal {self.nome} andou")
        return
    
    def emitir_som(self):
        pass

class cachorro(animal):
    def emitir_som(self):
        return "au,au"

class gato(animal):
    def emitir_som(self):
        return "miau, miau"
    
dog  = cachorro(nome="Rex")
cat = gato(nome="Felix")

print("exemplo de polimorfismo")
animais = [dog,cat]
for animal in animais:
    print(f"{animal.nome} faz: {animal.emitir_som()}")


#encapsulamento
class contaBancaria:
    def __init__(self,saldo)->None:
        self.__saldo = saldo #__ torna o atributo privado. somente quem está no contexto tem acesso

    def depositar(self,valor):
        if valor>0:
            self.__saldo+=valor
        
    def sacar(self,valor):
        if valor > 0 and valor<=self.__saldo:
            self.__saldo-=valor
    
    def consultarSaldo(self):
        return self.__saldo
    

conta = contaBancaria(saldo=1000)
print(f"saldo da conta bancário: {conta.consultarSaldo()}")
conta.depositar(valor=500)
print(f"saldo da conta bancário: {conta.consultarSaldo()}")
conta.depositar(valor=-500)
print(f"saldo da conta bancário: {conta.consultarSaldo()}")
conta.sacar(valor=200)
print(f"saldo da conta bancário: {conta.consultarSaldo()}")



#classe abstrata - não é possivel criar uma instacia de uma classe abstrata. ela serve de molde
from abc import ABC,abstractmethod

class Veiculo(ABC):

    @abstractmethod  #decorador - definir que essa é uma classe abstrata
    def ligar(self):
        pass

    @abstractmethod
    def desligar(self):
        pass

class Carro(Veiculo):
    def __init__(self) ->None:
        pass

    def ligar(self):
        return "carro ligado usando a chave"
    
    def desligar(self):
        return "carro desligado usando a chave"
    
carro_amarelo=Carro()
print(carro_amarelo.ligar())
print(carro_amarelo.desligar())
