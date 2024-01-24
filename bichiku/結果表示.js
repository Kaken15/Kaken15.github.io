// ウィンドウサイズが変更されたときにコンテンツのサイズを調整する
        window.addEventListener('resize', function () {
            const content = document.getElementById('content');
            content.style.width = window.innerWidth + 'px';
            content.style.height = window.innerHeight + 'px';
        });

        // 初期表示時にもサイズを設定
        window.dispatchEvent(new Event('resize'));

//ローカルストレージからcheckedItemsのデータを取得して、local変数に格納
let local = localStorage.getItem('checkedItems');
//取得したローカルストレージのデータをコンソールに表示
console.log(local);
//取得したデータを新しい変数 `value1` にコピー
let value1 = local;
//value1という配列の中身をコンマで分割。(これにより、配列として各項目に分かれたデータを得る)
value1 = value1.split(',');
console.log('受け取った値:', value1);

// ループを使って、配列 value1の各要素に対して処理を行う
for (var i = 0; i < value1.length; i++) {
//リストアイテムを作成し、その内容を value1[i]に設定
     var todoList = document.createElement('li'); 
     todoList.textContent = value1[i];
//Amazonの検索結果へのリンクを作成し、その内容を `amznLink.textContent` に "アマゾンで探す"、`amznLink.href` に対応する検索URLとして設定
     var amazonURL = "アマゾンで探す";
     var amznLink = document.createElement('a');
     amznLink.href="https://www.amazon.co.jp/s?k=" + encodeURIComponent(value1[i]) + "&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1XBGR6NMXFFF7&sprefix="+ encodeURIComponent(value1[i]) +"%2Caps%2C155&ref=nb_sb_noss_1";
     amznLink.textContent=amazonURL;
//上記をHTML上のlistという要素に追加
     var listRoot = document.getElementById('list');
     listRoot.appendChild(todoList);
     listRoot.appendChild(amznLink);
}

function copyToClipboard() {
      const urlToCopy = window.location.href;
      
      // スマートフォンの場合はテキストエリアを作成してはならないため、代替手段を使います
      navigator.clipboard.writeText(urlToCopy)
        .then(() => alert('URL copied to clipboard!'))
        .catch(err => console.error('Unable to copy to clipboard', err));
    }

    function saveToFile() {
      const urlToSave = window.location.href;

      // Blobを作成し、ファイルに保存する
      const blob = new Blob([urlToSave], { type: 'text/html' });
      const a = document.createElement('a');

      // ユーザーエージェントを取得
      const userAgent = navigator.userAgent.toLowerCase();

      // スマートフォンの場合は新しいタブで開く
      if (userAgent.includes('iphone') || userAgent.includes('android')) {
        a.target = '_blank'; // スマートフォンの場合は新しいタブで開く
      }

      // スマートフォンでは自動的にダウンロードが起こりにくいため、ユーザーアクションを待つ
      a.href = URL.createObjectURL(blob);
      a.download = 'url.html';
      
      // ユーザーアクションを待つ
      document.body.addEventListener('click', () => {
         setTimeout(() => {
        document.body.removeChild(a);
         },0);
      });

      document.body.appendChild(a);

      if (userAgent.includes('iphone') || userAgent.includes('android')) {
        alert('Please click the link to download the HTML file.');
      } else {
        a.click(); // パソコンの場合は自動的にクリックしてダウンロード
      }
    }
