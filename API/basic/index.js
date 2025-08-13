
    const url = "https://meowfacts.herokuapp.com/";

      let getdata = async function(){

        let data = await fetch(url)
        console.log(data, "url data")
        let response = await data.json()
        console.log(response, "json data")
        let obj = Object.keys(response);
        console.log(obj, " keys")
        console.log(response.data)
        
      }