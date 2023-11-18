document.addEventListener('DOMContentLoaded', function() {
    fetch('http://127.0.0.1:5000/get_mobara_pdf')
        .then(response => response.json())
        .then(data => {
            // 最初の物件のリンク
            const firstLinkElement = document.createElement('a');
            firstLinkElement.href = data.firstPropertyLink;
            firstLinkElement.textContent = '最初の物件情報PDFを見る';
            firstLinkElement.target = '_blank';
            document.getElementById('mobara-property').appendChild(firstLinkElement);

            // 改行を追加
            document.getElementById('mobara-property').appendChild(document.createElement('br'));

            // 2番目の物件のリンク
            const secondLinkElement = document.createElement('a');
            secondLinkElement.href = data.secondPropertyLink;
            secondLinkElement.textContent = '2番目の物件情報PDFを見る';
            secondLinkElement.target = '_blank';
            document.getElementById('mobara-property').appendChild(secondLinkElement);
        })
        .catch(error => console.error('Error:', error));
});
