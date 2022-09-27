values = input("Digite os valores para a soma separados por espaço ").split()

result = 0

for value in values:
    if value.isdigit() is False:
        print(f"Erro ao somar valores, {value} é um valor inválido")
    else:
        result += int(value)
print(f"A soma dos valores válidos é {result}.")
