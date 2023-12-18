function formcheck(){
    var flag = 0;

    //設定開始(必須にする項目を設定してください)
    if(document.Form1.userId.value == ""){
    flag = 1;
    document.getElementById('notice-input-1');
    }
    else if(document.Form1.pass.value == ""){
       document.getElementById('notice-input-2');
    flag = 1;
    }

    if(flag){
    document.write('ログインIDまたはパスワードが違います。');
    return false;
    }
    else{
    return true; //送信を実行

    }
}

//  -->
