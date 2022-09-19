class Geladeira:
    def __init__(self, marca, frost_free, preco):
        self.marca = marca
        self.frost_free = frost_free
        self.preco = preco


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.geladeira = None

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        return f"{self.nome} tem uma geladeira da marca {self.geladeira.marca} e possui {self.saldo_na_conta} reais na conta"


geladeiraPadrão = Geladeira("Electrolux", True, 1000)

pessoa_que_quer_geladeira = Pessoa("Joesley", 5000)

pessoa_que_quer_geladeira.comprar_geladeira(geladeiraPadrão)

print(pessoa_que_quer_geladeira)
