
let local = localStorage.getItem('checkedItems');
console.log(local);
let value1 = local;
value1 = value1.split(',');
console.log('受け取った値:', value1);
document.getElementById("testResult").innerText = value1;


for (var i = 0; i < value1.length; i++) {
     var todoList = document.createElement('li'); 
     todoList.textContent = value1[i];
     var amazonURL = "アマゾンで探す";
     var amznLink = document.createElement('a');
     amznLink.href="https://www.amazon.co.jp/s?k=" + encodeURIComponent(value1[i]) + "&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1XBGR6NMXFFF7&sprefix="+ encodeURIComponent(value1[i]) +"%2Caps%2C155&ref=nb_sb_noss_1";
     amznLink.textContent=amazonURL;
     var listRoot = document.getElementById('list');
     listRoot.appendChild(todoList);
     listRoot.appendChild(amznLink);
}

