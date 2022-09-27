import requests

response = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers")

assert "bot detected" not in response.text
