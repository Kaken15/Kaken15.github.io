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

document.getElementById('dlbtn').addEventListener('click', () => {
  // JSON ファイルを表す Blob オブジェクトを生成
  const json = JSON.stringify({ a: 1, b: 2, c: 3 }, null, '  ');
  const blob = new Blob([json], { type: 'application/json' });
 
  // ダミーの a 要素を生成して body 要素の最後に追加
  let dummy_a_el = document.createElement('a');
  document.body.appendChild(dummy_a_el);
 
  // a 要素の href 属性に Object URL をセット
  dummy_a_el.href = window.URL.createObjectURL(blob);
 
  // a 要素の download 属性にファイル名をセット
  dummy_a_el.download = 'test.json';
 
  // 疑似的に a 要素をクリックさせる
  dummy_a_el.click();
 
  // a 要素を body 要素から削除
  document.body.removeChild(dummy_a_el);
});
