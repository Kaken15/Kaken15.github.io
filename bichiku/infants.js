//全部の備蓄品チェックリストを取得して、変数に格納
const checkboxes=document.getElementsByClassName("checks");
//結果表示のボタンを取得して、変数に格納
const btn=document.getElementById("btn");
//resultsというidを取得して、変数に格納
const resultsDiv=document.getElementById("results");
//未チェックのチェックリストを取得
const getUncheckedValues=()=>{
//チェックリストの数分ループして、uncheckedValuesという配列に追加
    var uncheckedValues = [];
    for(let i=0;i<checkboxes.length;i++){

//未チェックのチェックリストを確認し、アラートメッセージかResultButton関数を呼び出す
        if(!checkboxes[i].checked){
            uncheckedValues.push(checkboxes[i].value);
        }
    }
    if(uncheckedValues.length>0){
        //alert("Unchecked values:"+uncheckedValues.join(" "));

        ResultButton(uncheckedValues);
    }else{
        alert("Allcheckboxes are checked.");
    }
};

btn.addEventListener("click",getUncheckedValues,false);




function ResultButton(value1)
{
    localStorage.setItem('checkedItems', value1);
    window.location.href = './結果表示.html';
}
