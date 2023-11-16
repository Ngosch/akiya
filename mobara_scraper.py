from flask import Flask, jsonify, render_template, send_from_directory
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS  # CORSをインポート

app = Flask(__name__)
CORS(app)  # CORSの設定を追加

@app.route('/')
def index():
    # "index.html" テンプレートをレンダリングします
    return render_template('index.html')

@app.route('/get_mobara_pdf')
def get_mobara_pdf():
    try:
        url = 'https://www.city.mobara.chiba.jp/0000007702.html'
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        relative_pdf_link = soup.select_one('#mol_contents > div.mol_attachfileblock.block_index_4 > ul > li:nth-child(2) > a')['href']
        pdf_link = 'https://www.city.mobara.chiba.jp' + relative_pdf_link.replace('./', '/')
        return jsonify({'pdfLink': pdf_link})
    except Exception as e:
        print(f"エラーが発生しました: {e}")
        return jsonify({'error': str(e)})

@app.route('/js/<path:filename>')
def custom_static_for_js(filename):
    # JavaScriptファイルを提供するためのカスタムルート
    return send_from_directory('js', filename)

if __name__ == '__main__':
    app.run(debug=True)
