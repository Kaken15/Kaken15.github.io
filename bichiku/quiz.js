const quiz = [
    {
        question:"エレベーターに乗っている時、大地震が起きました。逃げる為にはどうしますか？",
        correct:"全部の階を押す",
        answers:["全部の階を押す", "地上に出るため1 階を押す", "最寄り階を押す", "非常ボタンを押す"],
        image:"https://4.bp.blogspot.com/-BhmHIpaZdT0/V2FUXMFDmGI/AAAAAAAA7W0/DvTZTtcEnnstw-FmBw0ufepN4m4bQ27zgCLcB/s800/elevator_door_open.png"
    },
    {
        question:"家族がはなればなれのとき、大きな地震が起きました。みんなの安否を確認するためにはどうしますか？",
        correct:"集合場所に行く",
        answers:["電話をかける", "メールを送る", "集合場所に行く", "探し回る"],
        image:"https://1.bp.blogspot.com/-p_33bhZsyFI/XW87KSBsKHI/AAAAAAABUpI/q9xKrk3A71EQGzYCMyWjtoH-W6WMQda9gCLcBGAs/s1600/yuudou_hinan_people.png"
    },
    {
        question:"地震発生時に家族とはなればなれになったときの集合場所。「集合場所を細かく決めること」が重要とされています。避難場所は一カ所だけでなくもう一カ所決めるべき、〇か×か？",
        correct:"〇",
        answers:["〇", "×"],
        image:"https://1.bp.blogspot.com/-_Mo8nPV2Bos/WydaErc262I/AAAAAAABMxw/P-oxub4mbPkOr-hC5EZgY81BcxmaF1OTwCLcBGAs/s800/saigai_maq_hinanjo.png"
    },
    {
        question:"大雨で膝の位置まで浸水している場合、道路での移動の避難の仕方として正しいのはどれ？　",
        correct:"棒などを持って、運動靴で避難する",
        answers:["長靴をはく", "大雨で濡れないように車で移動する", "棒などを持って、運動靴で避難する", "運動靴で避難"],
        image:"https://3.bp.blogspot.com/-Zc-Dsb9sRNM/VA7mWG24lqI/AAAAAAAAmO0/KZcNwUbUfvo/s800/saigai_yukaue_shinsui.png"
    },
    {
        question:"普段からできる台風対策として正しいのはどれでしょうか？",
        correct:"側溝や排水溝の掃除をして水回りをよくする",
        answers:["側溝や排水溝の掃除をして水回りをよくする", "外出や旅行を控える", "3.	台風に備えて、家財道具を高いところにうつす"],
        image:"https://4.bp.blogspot.com/-xEnTQPMaMn8/UZmCFbnDzRI/AAAAAAAATbg/q5_K0il-h18/s800/shizensaigai_typhoon.png"
    },
    {
        question:"台風の影響で激しい雨が続いています。大雨で水が溢れ道路や床下に氾濫し始めました。複数人で避難する場合、次の選択肢の内どれが正しい行動でしょうか。",
        correct:"高齢者・子どもを真ん中に縦に一列になってゆっくり歩く",
        answers:["車を避けるため道路の端を歩く", "元気な人を先頭に急ぎ足で歩く", "高齢者・子どもを真ん中に縦に一列になってゆっくり歩く"],
        image:"https://3.bp.blogspot.com/-1eWVEKfixZQ/VEETOABMZvI/AAAAAAAAobk/oBrup4MInEM/s800/tenki_boufuu.png"
    },
    {
        question:"海岸付近での津波の伝わる速さはどれくらい？",
        correct:"時速40 km",
        answers:["時速20 km", "時速30 km", "時速40 km", "時速50　㎞"],
        image:"https://1.bp.blogspot.com/-3p9B_7sTMiY/UupGaR4cRXI/AAAAAAAAdbM/b9iA05X5oOU/s800/tsunami_nigeru.png"
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
    document.getElementById("image").src=quiz[quizNow].image;

    document.getElementById("image").style.display = "block";
    document.getElementById("image").style.margin = "auto";

    for(let i=0; i<A.length; i++){
        A[i].textContent = quiz[quizNow].answers[i];
    }
        document.getElementById("h").textContent=quizNow+1+"/"+quiz.length;
    }
const quiz_judge = function(){
    for(let i2=0; i2<A.length; i2++){
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
            document.getElementById("Q").textContent = "あなたは"+quiz.length+"問中"+ok+"問正解でした";
            if(ok==quiz.length){
                document.getElementById("Q").textContent ="全問正解おめでとう！！！";
            }
            
            document.getElementById('r').style.visibility = "hidden";
            
        }
        
       
    });
    }
}
quiz_start();
quiz_judge();


