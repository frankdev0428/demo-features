   let count = document.querySelector('#count');
   let countNum = document.querySelector('#countNumber');
   let btnDanger = document.querySelector('#btnDanger');
   let btnPrimary = document.querySelector('#btnPrimary');

   
   const increase = () => 
   {
    count = 0;
    countNum = countNum + 1;
   }
   const decrease = () => {
     countNum = countNum  - 1;
   }