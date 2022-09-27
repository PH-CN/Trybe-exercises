import requests
from parsel import Selector

response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()
price = price = selector.css(".product_main .price_color::text").re_first(r"\d*\.\d{2}")
description = selector.css("#product_description + p::text").get()
banner_url = selector.css(".item.active img::attr(src)").get()
info_list = [title, price, description, banner_url[:-8]]
print(','.join(info_list))
