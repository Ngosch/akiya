import requests
from bs4 import BeautifulSoup

url = 'https://www.city.mobara.chiba.jp/0000007702.html'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# 指定されたセレクタを使用してPDFのリンクを取得
pdf_link = soup.select_one('#mol_contents > div.mol_attachfileblock.block_index_4 > ul > li:nth-child(2) > a')['href']

print(pdf_link)
