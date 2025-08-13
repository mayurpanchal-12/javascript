// const url = {"fileSizeBytes":59247,"url":"https://random.dog/d33b673c-f775-40b9-9782-8cb8e91ebe4b.jpg"}
const url ="https://api.adviceslip.com/advice"

let getdata =async()=>{
     let data =await fetch(url)
     console.log(data);
     let json = await data.json()
     console.log(json)
     console.log(json.slip.advice)
}