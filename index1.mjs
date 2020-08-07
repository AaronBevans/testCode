

function entriesToDOM(){
    let mainDiv = document.querySelector('#main-div')
    let newP = document.createElement('p')
    newP.className = 'new-p'
    newP.innerText = 'Working with the DOM'
    mainDiv.append(newP)
    console.log(newP)

    //create a new div
    let newTextArea = document.createElement('textarea')
    newTextArea.className = 'new-text-area'
    newTextArea.innerText = 'Hello World'
    mainDiv.append(newTextArea)
    console.log(newTextArea)
}
entriesToDOM()

let counterBtn = document.querySelector('input')

function changeBtn(){
    if(counterBtn.value === "100 | likes"){

        counterBtn.value = '101 | likes'
        
    }else{
        counterBtn.value = '100 | likes'
    }
}
counterBtn.addEventListener('click', changeBtn)

let engVar = 'software'
let engVar1 = 'engineer'

let newVariable = function(){
    console.log(`I am a ${engVar} ${engVar1}`)
}
newVariable()


