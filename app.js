   let count = document.querySelector('#count');
   let num = document.getElementById('countNum');
   let btnDanger = document.querySelector('#btnDanger');
   let btnPrimary = document.querySelector('#btnPrimary');
   let btmSaving = document.querySelector('#btnSaving')
   let counting = 0;
   const colorArr = ['#eab676','#abdbe3','#544828']
   btnPrimary.addEventListener('click', () => {
      counting = counting + 1;
      num.innerText = counting;
      
   })
  
   btnDanger.addEventListener('click' ,() => {
    counting = counting - 1;
    num.innerText = counting;
    num.style.color = 'red';
   })
   btnSaving.addEventListener('click', () => {
      
   })

   

   
   