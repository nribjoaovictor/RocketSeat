# @classmethod
# @staticmethod

class MinhaClasse:
    valor = 10 #atributo da classe

    def __init__(self,nome)->None:
        self.nome= nome #atributo da instancia

    #requer uma instancia para ser chamado
    def instancia(self):
        return f"Método de instancia chamado para {self.nome} de valor {self.valor}"
    
    @classmethod
    def metodo_classe(cls): #cls recebe a classe
        return f"método de classe chamado para {cls.valor}" #não dá para acessar cls.nome
    
    @staticmethod
    def metodo_estatico(): #não tem acesso aos atributos da classe nem da instancia, mas pode executar uma função epecifica
        return "metodo estático chamado"



obj = MinhaClasse(nome="classeExemplo")
print(obj.instancia())
print(MinhaClasse.valor) #não precisa de instancia para acessar um atributo da classe
print(MinhaClasse.metodo_classe())
print(MinhaClasse.metodo_estatico())


#metodo da classe é mt utilizado para criar instancias a partir de configurações globais

class Carro:
    def __init__(self,marca,modelo,ano):
        self.marca=marca
        self.modelo=modelo
        self.ano=ano

    @classmethod
    def criarCarros(cls,configuracao):
        marca,modelo,ano=configuracao.split(",")
        return cls(marca,modelo,int(ano))

configuracao1="toyota,coralla,2022"
carro1= Carro.criarCarros(configuracao1)
print(f"marca:{carro1.marca}\nmodelo:{carro1.modelo}\nano:{carro1.ano}")


class matematica:

    @staticmethod
    def somar(a,b):
        return a+b
    
print(matematica.somar(a=10,b=15))