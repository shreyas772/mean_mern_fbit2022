let operation =document.getElementById('operation');
let result=document.getElementById('opResults');
let buttons=document.querySelectorAll('button');

for(item of buttons){
    item.addEventListener('click' ,(e)=>{
        bvalue=e.target.innerText;

    })
}
console.log(result);