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

        # 最初の物件
        first_property = soup.select_one('#mol_contents > div.mol_attachfileblock.block_index_4 > ul > li:nth-child(1) > a')
        first_property_link = 'https://www.city.mobara.chiba.jp' + first_property['href'].replace('./', '/')
        first_property_title = '茂原市 ' + first_property.get_text()

        # 2番目の物件
        second_property = soup.select_one('#mol_contents > div.mol_attachfileblock.block_index_4 > ul > li:nth-child(2) > a')
        second_property_link = 'https://www.city.mobara.chiba.jp' + second_property['href'].replace('./', '/')
        second_property_title = '茂原市 ' + second_property.get_text()

        return jsonify({
            'firstPropertyLink': first_property_link,
            'firstPropertyTitle': first_property_title,
            'secondPropertyLink': second_property_link,
            'secondPropertyTitle': second_property_title
        })
    except Exception as e:
        print(f"エラーが発生しました: {e}")
        return jsonify({'error': str(e)})




@app.route('/js/<path:filename>')
def custom_static_for_js(filename):
    # JavaScriptファイルを提供するためのカスタムルート
    return send_from_directory('js', filename)

if __name__ == '__main__':
    app.run(debug=True)
