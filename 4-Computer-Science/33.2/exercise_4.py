import json
import csv


with open("books.json") as file:
    books = json.load(file)
    all_books = len(books)


result = dict()

for book in books:
    book_categories = book["categories"]
    for category in book_categories:
        if category in result:
            result[category] += 1
        else:
            result[category] = 1


percentages = dict()

for item in result:
    percentage = (result[item] / all_books) * 100
    percentages[item] = percentage


with open("exercise_4.csv", mode="w") as file:
    csv_writer = csv.writer(file)
    for key, value in percentages.items():
        csv_writer.writerow([key, value])
