document.getElementById("bmiForm").addEventListener("submit",function(e){
    e.preventDefault();

    const gender= document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value/100);
    const weight = parseFloat(document.getElementById("weight").value);
    if (age && gender && height && weight){
        const bmi= weight/(height*height);
        const resultelement = document.getElementById("result");

        let category="";

        if (bmi<18.5){
            category="Under weight";
        }
        else if(bmi>=18.5 && bmi<24.9){
            category="Normal weight";
        }else if(bmi>=24.9 && bmi<29.9){
            category="Over weight";
        }else{
            category="obses";
        }

        let resultmsg=" Your BMI:"+bmi.toFixed(2)+"<br>";
        resultmsg+="category:"+category

        resultelement.innerHTML=resultmsg;
    }
});