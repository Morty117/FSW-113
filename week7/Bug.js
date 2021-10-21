let bugContainer

const displayBug = () => {
    bugContainer = document.createElement('div')
    let employeeName = document.createElement('h2')
    let departmentName = document.createElement('p')
    let bug = document.createElement('p')
    let bugDescription = document.createElement('p')
    let fixedBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')

    bugContainer.classList.add('bugs')

    employeeName.innerHTML = document.bugForm.employee.value
    departmentName.innerHTML = document.bugForm.department.value
    bug.innerHTML = document.bugForm.bugLocation.value
    bugDescription.innerHTML = document.bugForm.bugDescription.value

    // fixedBtn.addEventListener('click', bugFixed(bugContainer))
    // deleteBtn.addEventListener('click', deleteBug(bugContainer))

    bugContainer.appendChild(employeeName)
    bugContainer.appendChild(departmentName)
    bugContainer.appendChild(bug)
    bugContainer.appendChild(bugDescription)
    bugContainer.appendChild(fixedBtn)
    bugContainer.appendChild(deleteBtn)

    document.getElementById('container').appendChild(bugContainer)

    console.log(bugContainer)
}

// const bugFixed = () => {
//     if(fixedBtn.clicked == true){
//         console.log('clicked')
//         bugContainer.style.textDecoration = 'line-through'
//     }
// }

// const deleteBug = () => {

// }

document.getElementById('submit').addEventListener('click', displayBug)