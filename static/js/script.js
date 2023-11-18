document.addEventListener('DOMContentLoaded', function() {
    fetch('http://127.0.0.1:5000/get_mobara_pdf')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('mobara-property');

            // 茂原市空き家バンク公式サイトへのリンクを追加
            const officialLinkRow = table.insertRow();
            const officialLinkCell = officialLinkRow.insertCell();
            const officialLink = document.createElement('a');
            officialLink.href = 'https://www.city.mobara.chiba.jp/0000007702.html';
            officialLink.textContent = '茂原市空き家バンク公式サイト';
            officialLink.target = '_blank';
            officialLinkCell.appendChild(officialLink);

            // 最初の物件の行を追加
            const row1 = table.insertRow();
            const cell1 = row1.insertCell();
            const link1 = document.createElement('a');
            link1.href = data.firstPropertyLink;
            link1.textContent = data.firstPropertyTitle;  // 最初の物件のタイトル
            link1.target = '_blank';
            cell1.appendChild(link1);

            // 2番目の物件の行を追加
            const row2 = table.insertRow();
            const cell2 = row2.insertCell();
            const link2 = document.createElement('a');
            link2.href = data.secondPropertyLink;
            link2.textContent = data.secondPropertyTitle;  // 2番目の物件のタイトル
            link2.target = '_blank';
            cell2.appendChild(link2);
        })
        .catch(error => console.error('Error:', error));
});
