const url = "https://api.breakingbadquotes.xyz/v1/quotes"

let getdata = async()=>{
    let data = await fetch(url);
    console.log("data from url ;-\n", data);
    let response = await data.json()
    console.log("data from json;_\n", response)
    let obj = Object.keys(response);
    console.log("keys for operations;-", obj)
    console.log(response[0])
     console.log(response[0].author)
     console.log(response[0].quote)
};
getdata()