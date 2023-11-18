document.addEventListener('DOMContentLoaded', function () {
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

    // 千葉市の公式サイトへのリンクを追加
    const chibaCitySection = document.getElementById('chiba-city-section');
    const chibaLink = document.createElement('a');
    chibaLink.href = 'https://www.cjkk.or.jp/reuse/reuse_02.html';
    chibaLink.textContent = '千葉市空き家バンク公式サイト';
    chibaLink.target = '_blank';
    chibaCitySection.appendChild(chibaLink);

    // 千葉県の市町村のリスト
    const municipalities = [
        "千葉市", "銚子市", "市川市", "船橋市", "館山市",
        "木更津市", "松戸市", "野田市", "成田市",
        "佐倉市", "東金市", "旭市", "習志野市", "柏市",
        "勝浦市", "市原市", "流山市", "八千代市", "我孫子市",
        "鴨川市", "鎌ケ谷市", "君津市", "富津市", "浦安市",
        "四街道市", "袖ケ浦市", "八街市", "印西市", "白井市",
        "富里市", "南房総市", "匝瑳市", "香取市", "山武市",
        "いすみ市", "大網白里市", "印旛郡", "香取郡"
    ];

    // 千葉県の市町村の見出しを追加
    const container = document.getElementById('municipalities-container');
    municipalities.forEach(municipality => {
        const heading = document.createElement('h3');
        heading.textContent = `${municipality}の物件情報`;
        container.appendChild(heading);
    });
});
