//ローカルストレージからcheckedItemsのデータを取得して、local変数に格納
let local = localStorage.getItem('checkedItems');
//取得したローカルストレージのデータをコンソールに表示
console.log(local);
//取得したデータを新しい変数 `value1` にコピー
let value1 = local;
//value1という配列の中身をコンマで分割。(これにより、配列として各項目に分かれたデータを得る)
value1 = value1.split(',');
console.log('受け取った値:', value1);
//html上にあるtestResultの要素にvalue1という配列を入れる
document.getElementById("testResult").innerText = value1;

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

// データを保存するためのテキスト
const dataToSave = "保存したいデータです。";

// バイナリデータへの変換
const blob = new Blob([dataToSave], { type: 'text/plain' });

// ファイル名
const fileName = '保存ファイル.txt';

// a要素を作成し、ダウンロードリンクとして設定
const a = document.createElement('a');
a.href = window.URL.createObjectURL(blob);
a.download = fileName;

// クリックしてダウンロードを開始
a.click();

// リソース解放のためにURLオブジェクトを解放
window.URL.revokeObjectURL(a.href);
