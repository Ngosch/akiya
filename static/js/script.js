document.addEventListener('DOMContentLoaded', function() {
    fetch('http://127.0.0.1:5000/get_mobara_pdf')  // Flask APIのエンドポイント
        .then(response => response.json())
        .then(data => {
            const pdfLink = data.pdfLink;
            const linkElement = document.createElement('a');
            linkElement.href = pdfLink;
            linkElement.textContent = '最新の物件情報PDFを見る';
            linkElement.target = '_blank'; // 新しいタブでPDFを開く
            document.getElementById('mobara-property').appendChild(linkElement);
        })
        .catch(error => console.error('Error:', error));
});
