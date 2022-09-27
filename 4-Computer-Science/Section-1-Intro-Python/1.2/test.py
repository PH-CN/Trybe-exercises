name_list = []

with open("arquivo.txt") as file:
    for line in file:
        name, grade = line.split()
        if int(grade) >= 6:
            name_list.append(name)


with open("arquivo2.txt", mode='w') as file:
    for name in name_list:
        file.write(f'{name}\n')
