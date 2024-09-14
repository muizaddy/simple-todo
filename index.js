const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('.todolist')

// const btnContainer =  



form = document.querySelector('form')
window.addEventListener('load', function(){
  form.addEventListener('submit', function(e){
e.preventDefault()
const data = todoInput.value
// console.log(e)
if(!data) return

const todoAdded = document.createElement('input')
document.querySelector('.todoapp_result').style.padding = '10px';
todoAdded.setAttribute('type', 'text')
todoAdded.setAttribute('type', 'text')
todoAdded.setAttribute('readonly', 'readonly')
todoAdded.classList.add('todo-added')
todoAdded.value = data

const btnsContainer = document.createElement('div')
btnsContainer.classList.add('btns')
btnsContainer.innerHTML = `
<button id="edit-btn" class="btn">Edit</button>
<button id="del-btn" class="btn">Delete</button>
`
todoList.prepend(todoAdded, btnsContainer)



todoInput.value = '';

const editBtn = document.querySelector('#edit-btn')
const delBtn = document.querySelector('#del-btn')

// EDITING THE BUTTON
editBtn.addEventListener('click', function(){
  if(editBtn.innerHTML.toLowerCase() === 'edit')
 { todoAdded.removeAttribute('readonly')
  todoAdded.style.border = '1px solid #ddd'
  todoAdded.focus()
    editBtn.innerHTML = 'Save'

  }
  else{
   editBtn.innerHTML = 'Edit'
   todoAdded.setAttribute('readonly', 'readonly')
todoAdded.style.border = 'none'
  }
  
})

// DELETING THE BUTTON

delBtn.addEventListener('click', function(){
  todoList.removeChild(todoAdded)
  todoList.style.padding = '10px';
  btnsContainer.classList.add('hidden')
})




  })
})