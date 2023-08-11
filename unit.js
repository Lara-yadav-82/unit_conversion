let c;
let f;
let button = document.getElementById("temperature");

button.addEventListener("click",()=>{
    c=document.getElementById("c");
    let k=c.value;
    let ans=Number(k)*(9/5)+32;
    f=document.getElementById("f");
    f.value=ans.toFixed(2);
});

let button1 = document.getElementById("weight1");

button1.addEventListener("click",()=>{

    c=document.getElementById("kg");
    let k=c.value;
    let ans=Number(k)*2.205;
    f=document.getElementById("lbs");
    f.value=ans.toFixed(2);
});
let button2 = document.getElementById("distance1");

button2.addEventListener("click",()=>{
    c=document.getElementById("nub-k");
    let k=c.value;
    let ans=Number(k)*2.205;
    f=document.getElementById("nub-m");
    f.value=ans.toFixed(2);
});
