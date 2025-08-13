const url ="https://api.kanye.rest/"





 
let getdata= async ()=>{
let data = await fetch(url);
  //  console.log("url data:-\n ", data);
     let response = await data.json();
  //  console.log("json data:-\n", response);
     let r = Object.keys(response);
  //  console.log("keys for operations:-\n", r)
     let ans = response.quote
  //  console.log(ans)
  return ans
};
let btn = document.getElementById('btn');
let container = document.getElementById('container')
btn.addEventListener('click',async()=>{
  let ans = await getdata()
 container.innerText=ans  

})

