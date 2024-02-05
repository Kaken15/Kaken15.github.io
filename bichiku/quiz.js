const quiz = [
    {
        question:"エレベーターに乗っている時、大地震が起きました。逃げる為にはどうしますか？",
        correct:"全部の階を押す",
        answers:["全部の階を押す", "地上に出るため1 階を押す", "最寄り階を押す", "非常ボタンを押す"],
        image:"https://4.bp.blogspot.com/-BhmHIpaZdT0/V2FUXMFDmGI/AAAAAAAA7W0/DvTZTtcEnnstw-FmBw0ufepN4m4bQ27zgCLcB/s800/elevator_door_open.png",
        explanation:"地震感知器が揺れを感知すると、エレベーターは最寄り階に自動停止します。着床後、自動的にとびらが開くので、速やかに避難しましょう。すべての階のボタンを押して、最初に止まった階でエレベーターから降りましょう。"
    },
    {
        question:"家族がはなればなれのとき、大きな地震が起きました。みんなの安否を確認するためにはどうしますか？",
        correct:"集合場所に行く",
        answers:["電話をかける", "メールを送る", "集合場所に行く", "探し回る"],
        image:"https://1.bp.blogspot.com/-p_33bhZsyFI/XW87KSBsKHI/AAAAAAABUpI/q9xKrk3A71EQGzYCMyWjtoH-W6WMQda9gCLcBGAs/s1600/yuudou_hinan_people.png",
        explanation:"災害に遭遇したら、まずは家族の安否を確認しましょう。しかし、災害が発生すると、被災地への電話が大量に殺到し、回線が混雑することによりつながりにくい状況に陥ります。連絡がとれなかったときのために、家族みんなが集合する場所はどこにするか、決めておきましょう。"
    },
    {
        question:"地震発生時に家族とはなればなれになったときの集合場所。「集合場所を細かく決めること」が重要とされています。避難場所は一カ所だけでなくもう一カ所決めるべき、〇か×か？",
        correct:"〇",
        answers:["〇", "×"],
        image:"https://1.bp.blogspot.com/-_Mo8nPV2Bos/WydaErc262I/AAAAAAABMxw/P-oxub4mbPkOr-hC5EZgY81BcxmaF1OTwCLcBGAs/s800/saigai_maq_hinanjo.png",
        explanation:"大雨の時は水面下が見えにくくなり、夜に移動する場合は自分の足元も見づらくなります。マンホールの蓋や側溝などがないかを確認するために、長い棒を持って移動しましょう。雨といえば長靴をイメージする方も多いとは思いますが、長靴に雨が入流と動きにくくなり、かえって危険です。大雨の時は運動靴で移動しましょう。"
    },
    {
        question:"大雨で膝の位置まで浸水している場合、道路での移動の避難の仕方として正しいのはどれ？　",
        correct:"棒などを持って、運動靴で避難する",
        answers:["長靴をはく", "大雨で濡れないように車で移動する", "棒などを持って、運動靴で避難する", "運動靴で避難"],
        image:"https://3.bp.blogspot.com/-Zc-Dsb9sRNM/VA7mWG24lqI/AAAAAAAAmO0/KZcNwUbUfvo/s800/saigai_yukaue_shinsui.png",
        explanation:"大雨の時は水面下が見えにくくなり、夜に移動する場合は自分の足元も見づらくなります。マンホールの蓋や側溝などがないかを確認するために、長い棒を持って移動しましょう。雨といえば長靴をイメージする方も多いとは思いますが、長靴に雨が入流と動きにくくなり、かえって危険です。大雨の時は運動靴で移動しましょう。"
    },
    {
        question:"普段からできる台風対策として正しいのはどれでしょうか？",
        correct:"側溝や排水溝の掃除をして水回りをよくする",
        answers:["側溝や排水溝の掃除をして水回りをよくする", "外出や旅行を控える", "家財道具を高いところにうつす","高いところに避難する"],
        image:"https://4.bp.blogspot.com/-xEnTQPMaMn8/UZmCFbnDzRI/AAAAAAAATbg/q5_K0il-h18/s800/shizensaigai_typhoon.png",
        explanation:"日頃から、大雨に備えて自宅の周囲を点検し、路面排水のためにある側溝などの上部に溜まったごみや落ち葉がある場合は掃除しておきましょう。側溝の上部にブロックなどの物を置かないようにすることも大切です。"
    },
    {
        question:"台風の影響で激しい雨が続いています。大雨で水が溢れ道路や床下に氾濫し始めました。複数人で避難する場合、次の選択肢の内どれが正しい行動でしょうか。",
        correct:"高齢者・子どもを真ん中に縦に一列になってゆっくり歩く",
        answers:["車を避けるため道路の端を歩く", "元気な人を先頭に急ぎ足で歩く", "高齢者・子どもを真ん中に縦に一列になってゆっくり歩く","横一列になって歩く"],
        image:"https://3.bp.blogspot.com/-1eWVEKfixZQ/VEETOABMZvI/AAAAAAAAobk/oBrup4MInEM/s800/tenki_boufuu.png",
        explanation:"道路の端は雨水が溢れて側溝やマンホールの蓋が外れている場合が多いため危険です。先頭の人が長い棒などで安全を確認しながら前に進んでいくといいです。前後の人はロープで結んでおくといいでしょう。"
    },
    {
        question:"海岸付近での津波の伝わる速さはどれくらい？",
        correct:"時速40 km",
        answers:["時速20 km", "時速30 km", "時速40 km", "時速50　㎞"],
        image:"https://1.bp.blogspot.com/-3p9B_7sTMiY/UupGaR4cRXI/AAAAAAAAdbM/b9iA05X5oOU/s800/tsunami_nigeru.png",
        explanation:"津波の速さは、海の水深が深いほど速くなります、海岸付近の水深が浅いところでも、沖合に比べスピードは遅くなります。水深10 m程度の場合、津波の速さは時速40 kmとなります。これは自動車並みの速さです。"
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
            window.alert("正解\n\n解説：\n" + quiz[quizNow].explanation));
            ok = ok+1;
        }else{
            window.alert("不正解\n\n解説：\n" + quiz[quizNow].explanation));
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


