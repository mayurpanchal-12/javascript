let input = document.querySelector("#number");
let btn = document.querySelector("button");
let fact = document.getElementById("fact");

btn.addEventListener('click', async(e)=>{
  e.preventDefault();
   let num = input.value;
     if(num === "" || num< 0){
      alert ("please enter a valid number");
      return;
     }

const url =`http://numbersapi.com/${num}?json`;
  let getdata = await fetch(url);
  let data = await getdata.json();
  fact.innerText = data.text

})


