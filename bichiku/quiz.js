const quiz = [
    {
        question:"エレベーターに乗っている時、大地震が起きました。逃げる為にはどうしますか？",
        correct:"全部の階を押す",
        answers:["全部の階を押す", "地上に出るため1 階を押す", "最寄り階を押す", "非常ボタンを押す"]
    },
    {
        question:"家族がはなればなれのとき、大きな地震が起きました。みんなの安否を確認するためにはどうしますか？",
        correct:"集合場所に行く",
        answers:["電話をかける", "メールを送る", "集合場所に行く", "探し回る"]
    },
    {
        question:"地震発生時に家族とはなればなれになったときの集合場所。「集合場所にを細かく決めること」が重要とされています。避難場所は一か所だけでなくもう一カ所決めるべき、〇か×か？",
        correct:"〇",
        answers:["〇", "×"]
    },
    {
        question:"大雨で膝の位置まで浸水している場合、道路での移動の避難の仕方として正しいのはどれ？　",
        correct:"棒などを持って、運動靴で避難する",
        answers:["長靴をはく", "大雨で濡れないように車で移動する", "棒などを持って、運動靴で避難する", "運動靴で避難"]
    },
    {
        question:"普段からできる台風対策として正しいのはどれでしょうか？",
        correct:"側溝や排水溝の掃除をして水回りをよくする",
        answers:["側溝や排水溝の掃除をして水回りをよくする", "外出や旅行を控える", "3.	台風に備えて、家財道具を高いところにうつす"]
    },
    {
        question:"台風の影響で激しい雨が続いています。大雨で水が溢れ道路や床下に氾濫し始めました。複数人で避難する場合、次の選択肢の内どれが正しい行動でしょうか。",
        correct:"高齢者・子どもを真ん中に縦に一列になってゆっくり歩く",
        answers:["車を避けるため道路の端を歩く", "元気な人を先頭に急ぎ足で歩く", "高齢者・子どもを真ん中に縦に一列になってゆっくり歩く"]
    },
    {
        question:"海外付近での津波の伝わる速さはどれくらい？",
        correct:"時速40 km",
        answers:["時速20 km", "時速30 km", "時速40 km", "時速50　㎞"]
    }
]
let quizNow = 0;
let ok =0; 
const A = [
    document.getElementById("A1"),
    document.getElementById("A2"),
    document.getElementById("A3"),
    document.getElementById("A4"),
];
const quiz_start = function(){
    document.getElementById("Q").textContent = quiz[quizNow].question;

    for(let i=0; i<4; i++){
        A[i].textContent = quiz[quizNow].answers[i];
    }
        document.getElementById("h").textContent=quizNow+1+"/"+quiz.length;
    }
const quiz_judge = function(){
    for(let i2=0; i2<4; i2++){
    A[i2].addEventListener("click",function(){
        if(quiz[quizNow].correct == quiz[quizNow].answers[i2]){
            window.alert("正解");
            ok = ok+1;
        }else{
            window.alert("不正解");
        }
        quizNow++;
        if(quizNow<quiz.length){
            quiz_start();
        }else{
            document.getElementById("Q").textContent = "あなたは"+quiz.length+"中"+ok+"問正解でした";
            if(ok==quiz.length){
                document.getElementById("Q").textContent ="全問正解おめでとう！！！";
            }
            
            document.getElementById('r').style.visibility = "hidden";
            
        }
        
        document.write('<img src="https://www.sejuku.net/blog/wp-content/uploads/2017/10/voice_logo.png" alt="画像の解説文">')
    });
    }
}
quiz_start();
quiz_judge();


