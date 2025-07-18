let todoList =[]
displayitems()


function add (){
    let input=document.querySelector('#text')
    let dateinput=document.querySelector('#date')
    let inputvalue = input.value;
    let datevalue = dateinput.value
    todoList.push({item:inputvalue,duedate:datevalue})
        input.value='';
        dateinput.value='';
displayitems();
               }
// function displayitems(){
// let display = document.querySelector('.todo-container')
// display.innerText =''
// for (let i = 0; i < todoList.length; i++) {
// display.innerText = display.innerText+ "\n"+ todoList[i]  
// }

// }

function displayitems() {
      let containerElement = document.querySelector('.todo-container');
      let newhtml = ''
               for (let i = 0; i < todoList.length; i++) {``
                  // let item = todoList[i].item
                  // let duedate = todoList[i].duedate
      let{item,duedate} = todoList[i]
                  newhtml += `
                  <span>${item}</span>
                  <span>${duedate}</span>
                   <button class = "delete" onclick = "
                    todoList.splice(
                    ${i},1);
                    displayitems();">delete</button>
                   `;
      }
      containerElement.innerHTML = newhtml
    }