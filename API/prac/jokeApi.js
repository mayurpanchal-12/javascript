const url = "https://official-joke-api.appspot.com/random_joke"
  let btn = document.getElementById('btn')
  let joke = document.getElementById('joke')
  let type = document.getElementById('type')

let getdata = async()=>{
  let data = await fetch(url);
    // console.log(" url data :- \t ", data);
  let response = await data.json();
    // console.log("json object data :- \t" , response);
  let keys = Object.keys(response);
    // console.log("keys for operation:-\t" , keys)
  // console.log(response.type)
  // console.log(response.setup)
  // console.log(response.punchline)

  return response

};

  btn.addEventListener('click', async()=>{
      let jokedata = await getdata();
      type.innerText= `type:-${jokedata.type}`;
      joke.innerText = ` ${jokedata.setup}\n ${jokedata.punchline}`

  })
