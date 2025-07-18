let list=[];
display()
function add(params) {
     let todo = document.querySelector('#text')
     let date = document.querySelector('#date')
     let todovalue = todo.value
     let datevalue = date.value
     list.push({item:todovalue,due:datevalue})
        todo.value=''
        date.value=''
        display()
}

function display(){
let display = document.querySelector('#container')
  let newhtml = ''
   for (let i = 0; i < list.length; i++) { ``
        let{item,due}=list[i]
       newhtml +=`
          <span>${item}</span>
          <span>${due}</span>
          <button id="delete" onclick="
          list.splice(${i},1);
          display()"> delete </button>
       
       `
              
}
display.innerHTML=newhtml
}

