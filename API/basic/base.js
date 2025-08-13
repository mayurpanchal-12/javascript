
const url = "https://dog.ceo/api/breeds/image/random";  // Real data API"
let getdata = async function (){
         let response = await fetch(url);
          console.log(response);
          let data = await response.json()
          console.log(data)
          console.log(Object.keys(data));          
         console.log(data.message);
        }

  //   let get
  // data = async function (){
  //    let response = await fetch(url);
  //    console.log(response)
  //    // response is an object 
  //    // without [option] fetch creates get request ; it just give data ; above is get request 
  //    // currently what we get is in json formal ; not exactly json butt look like a json
  //    // currently we get response in json format ; we need to coonvert it into java script object notation  
  //    // for this we use json method where input json and  output js object 
  //    // json is also asynchronous so we use await 
  //    let data = await response.json()
  //    console.log(data[0])
      
  //  }