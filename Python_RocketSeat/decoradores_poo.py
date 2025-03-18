#adicionar funcionalidade ao metodo sem precisar alterar o codigo original da função
#funciona como uma função

def meu_decorador(func):
    def wrapper():
        print("Antes da função ser chamada")
        func()
        print("depois de ser chamada")
    return wrapper

@meu_decorador
def minha_funcao():
    print("minha função foi chamada")

minha_funcao()



class meuDecoradorDeClasse:
    def __init__(self,func)->None:
        self.func=func

    def __call__(self)->any:
        print("antes da chamada")
        self.func()
        print("depois da chamada")

@meuDecoradorDeClasse
def segundaFuncao():
    print("segunda função foi chamada")

segundaFuncao()