def longest_name(name_list):
    longest = ''
    for name in name_list:
        if (len(name)) > len(longest):
            longest = name
    return longest


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(longest_name(names))
