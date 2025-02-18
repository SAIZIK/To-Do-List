// Get the taskbox and add button elements
const taskbox = document.getElementById('taskbox');
const addBtn = document.getElementById('addbtn');
const inputField = document.getElementById('taskInput');
const updateinput = document.getElementById('updateinput');
const textErr = document.getElementById('texterr')
const notask = document.getElementById('notask');


// Add event listener to the add button
addBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Check if the input field is empty
    if (inputField.value === '') {  
      textErr.style.display=('block');
      inputField.style.outline=('red 1px solid')
      return;
    }
    // if (taskbox.childElementCount > 0)
    //     {
    //         notask.style.display = 'none';
    //     } 
    //     else 
    //     {
    //         notask.style.display = 'block';
    //     }
  // Get the input value
  const taskText = inputField.value;

  // Create a new tasklist div
  const tasklist = document.createElement('div');
  tasklist.className = 'taskline';

  // Create a p element for the task text
  const taskPara = document.createElement('p');
  const text = document.createTextNode(taskText)
  taskPara.appendChild(text);

  const listInput = document.createElement('input')

  // Create a buttons div
  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  // Create the Check, Remove, and Update buttons
  const checkBtn = document.createElement('button');
  checkBtn.innerText = 'Check';
  checkBtn.classList.add('checkbtn')
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.classList.add('removebtn')
  const updateBtn = document.createElement('button');
  updateBtn.innerText = 'Update';
  updateBtn.classList.add('updatebtn')

  // Append the buttons to the buttons div
  buttons.appendChild(checkBtn);
  buttons.appendChild(removeBtn);
  buttons.appendChild(updateBtn);

  // Append the task text and buttons to the tasklist div
  tasklist.appendChild(taskPara);
  tasklist.appendChild(buttons);
  tasklist.appendChild(listInput);

  // Append the tasklist div to the taskbox
  taskbox.appendChild(tasklist);

  
  // Clear the input field
  inputField.value = "";
  textErr.style.display=('none');
  inputField.style.outline=('none');

}

taskbox.addEventListener("click",(event)=>
{
    if(event.target.classList.contains('removebtn'))
    {
        event.target.parentElement.parentElement.remove()
    }
    if(event.target.classList.contains('updatebtn'))
    {
        const taskList = event.target.parentElement.parentElement;
        const updateInput = taskList.querySelector('input');
        const pElement = taskList.querySelector('p');
        const buttons = taskList.querySelector('.buttons');
        const checkBtn = buttons.querySelector('.checkbtn');
        const removeBtn = buttons.querySelector('.removebtn');

        if (updateInput.style.display === 'block') {
            // Update the p element with the input value
            pElement.textContent = updateInput.value;
            updateInput.style.display = 'none';
            checkBtn.style.display = 'inline-block';
            removeBtn.style.display = 'inline-block';
            event.target.innerText='Update'
            event.target.style.marginLeft=("0px")
        } else {
            // Show the input field
            updateInput.style.display = 'block';
            updateInput.value = pElement.textContent;
            updateInput.focus();
            checkBtn.style.display = 'none';
            removeBtn.style.display = 'none';
            event.target.innerText='Done'
            event.target.style.marginLeft=("160px")
        }
    }
    if(event.target.classList.contains('checkbtn'))
        {
            const taskList = event.target.parentElement.parentElement;
            const pCheck = taskList.querySelector('p');
            if(pCheck.style.textDecoration === 'line-through' & pCheck.style.color =='grey')
                {
                    pCheck.style.textDecoration = 'none';
                    pCheck.style.color ='black'
                    event.target.innerText='check'
                }
            else
            {
                pCheck.style.textDecoration = 'line-through';
                pCheck.style.color ='grey'
                event.target.innerText='Uncheck'
            }
        }
})
