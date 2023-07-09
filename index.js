// @ts-nocheck
const previousOperand = document.getElementById('previousOperand');
const currentOperand = document.getElementById('currentOperand');
const output = document.getElementById('output');

output.addEventListener('output' , function(event) {
    if(!previousOperand.value || !currentOperand ){
        alert("enter the value")
    }
     else{
         let x=parseFloat(previousOperand);
         let y=parseFloat(currentOperand);

         let  result =x + y;
         x = 5 ;
         y =20;
         output.innerText = result;
         event.preventDefault();
     }   
    
})

