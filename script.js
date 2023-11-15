// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/path/to/mobara_scraper.py')  // mobara_scraper.py の結果を取得するサーバーサイドのエンドポイント
        .then(response => response.json())
        .then(data => {
            const pdfLink = data.pdfLink;
            const linkElement = document.createElement('a');
            linkElement.href = pdfLink;
            linkElement.textContent = '最新の物件情報PDF';
            document.getElementById('mobara-property').appendChild(linkElement);
        })
        .catch(error => console.error('Error:', error));
});
