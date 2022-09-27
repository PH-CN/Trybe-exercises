name = input('Digite seu nome ')

letters_list = list(name)

for letter in letters_list:
    print(name)
    name = name[:-1]
