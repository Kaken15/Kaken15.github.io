
const checkboxes=document.getElementsByClassName("checks");
const btn=document.getElementById("btn");
const resultsDiv=document.getElementById("results");
const getUncheckedValues=()=>{
    var uncheckedValues = [];
    for(let i=0;i<checkboxes.length;i++){


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