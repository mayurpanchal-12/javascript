const url = "https://dog.ceo/api/breeds/image/random"
// let data = fetch(url)
// console.log(data)
let getdata = async function(){
  let data = await fetch(url)
  console.log(data)
  let d = await data.json()
  console.log(d)
  console.log(d.message)

};