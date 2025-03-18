class animal:
    def __init__(self,nome)->None:
        self.nome=nome
    
    def emitir_som(self):
        pass

class mamifero(animal):
    def amamentar(self):
        return f"{self.nome} está amamentando"
    
class ave(animal):
    def voar(self):
        return f"{self.nome} está voando"
    
class Morcego(mamifero,ave):
    def emitir_som(self):
        return "morcegos emitem sons ultrassônicos"
    
morcego=Morcego(nome="batman")

#classe animal
print("nome do morcego", morcego.nome)
print("som do morcego",morcego.emitir_som())

#classe mamifero
print("morcego amamentando",morcego.amamentar())
print("morcego voando",morcego.voar())

