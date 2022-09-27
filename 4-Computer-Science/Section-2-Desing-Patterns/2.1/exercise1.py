class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume == 99:
            print("O volume já está no máximo!")
            return
        else:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume == 0:
            print("O volume já está no minímo!")
            return
        else:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if not 1 < canal < 99:
            raise ValueError("O canal só pode estar entre 1 e 99")
        self.__canal = canal
        print(f'O canal agora é {self.__canal}')

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def get_all_attributes(self):
         print(f'{self.__volume} {self.__canal} {self.__tamanho} {self.__ligada}')

Televisão = TV(40)

Televisão.get_all_attributes()

Televisão.diminuir_volume()

Televisão.get_all_attributes()