const url = "https://meowfacts.herokuapp.com/";
let space = document.querySelector('p');
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
 getdata();
})

async function getdata(params) {
  let data = await fetch(url);
  // console.log("url data:- \t ", data);
  let response = await data.json();
  // console.log("json obj data:- \t" , response);
  let keys = Object.keys(response);
  // console.log("keys for operations:- \t", keys);
  space.innerText = (response['data'])
}