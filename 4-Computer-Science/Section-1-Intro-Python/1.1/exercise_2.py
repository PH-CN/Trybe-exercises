def average(number_list):
    result = 0
    for number in number_list:
        result += number
    return result / len(number_list)


print(average([2, 3, 3, 5, 7, 10]))
