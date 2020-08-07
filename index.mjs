//alert('hello from Aaron!');
//alert('I am relearning js.')

//functions
function sum(num, num1){
    return num + num1
}
console.log(sum(1, 1000))

//functions being invoked from within a variable.
function printMsg(msg){
    return msg
}

let logMsg = printMsg('greetings from js')
console.log(logMsg)

//storing a function within a variable.
let funVar = function(codeBlock){
    return codeBlock
}
console.log(funVar('log out this string message'))
//the funVar variable is now a function and can be invoked.

//while loops & for loops algorithms
let i = 0;

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 let useWhile = function(){
        while(i < array.length){
            console.log(array[i] + ' lives in the array')
               i++;
    }
 }
 console.log(useWhile())



function oddsFirst(){
        for(i = 0; i < array.length; i++){
            array[i] % 2 === 1 ? console.log('odd') 
                : console.log('even')
    }
}
let firstOdds = oddsFirst()
console.log(firstOdds)

//while loop algorithm
let simpStr = 'aaron'
let simpStrLen = simpStr.length
let count = 0;


function lengthOfStr(){
        while (count < simpStrLen){
            console.log(
                'the string is equal to ' 
                    + simpStrLen
            )
        count++;
    }
}
let strFun = lengthOfStr()
console.log(strFun)

//working with the DOM.
let headingText = document.getElementById('heading')
heading.style.color = 'red'

    let ppText = document.getElementById('paraText')
    ppText.style.color = 'white';

    ppText = document.getElementById('paraText1')
    ppText.style.color = 'white';

    ppText = document.getElementById('paraText2')
    ppText.style.color = 'white';


//modifying an element's class text content
let text = document.querySelector('#heading').textContent
console.log(text)



//DOM: textContent
let editedText = document.querySelector('#h3-heading').textContent = text

editedText = document.querySelector('#h3-heading1').textContent = text

editedText = document.querySelector('#h3-heading2').textContent = text

//modifying the back ground color of the web page to navy
document.body.style.backgroundColor = 'navy'

//modifying the text that has not been selected to white.
document.body.style.color = 'white'

    //modifying styles; toggling with className & classList
    let styledHead = document.querySelector('#h3-heading').className//lists all classes and Ids

    styledHead = document.querySelector('#h3-heading').classList.toggle('subHeading')//toggles/does not show class name.
    console.log(styledHead)

    styledHead = document.querySelector('#h3-heading').classList.toggle('subHeading')//toggles/shows class name.
    console.log(styledHead)

    document.querySelector('#paraText').className

    console.log(document.querySelector('#paraText').classList.toggle('pg'))

    document.querySelector('#paraText').className

    console.log(document.querySelector('#paraText').classList.toggle('pg'))

//modifying the text value of a form element's id.
let textValue = document.getElementById('text-content')

console.log(textValue.value = 'enter original text here') 

textValue.style.color = 'black'

textValue = document.getElementById('text-content1')

console.log(textValue.value = 'enter new text here')

textValue.style.color = 'black'

textValue = document.getElementById('text-content2')

console.log(textValue.value = 'enter newest text here')

textValue.style.color = 'black'

    //creating and appending new elements in js
    let addHead = document.createElement('h1')

    addHead.textContent = 'Creating Elements with Js'

let addToBody = document.body.append(addHead)

    let addParagraph = document.createElement('p')

    addParagraph.textContent = 'new paragraph with js.'

addToBody = document.body.append(addParagraph)

    addHead.style.color = 'red'

let addList = document.createElement('ul')

addList.textContent = 'This is a list'

addToBody = document.body.append(addList)

addList = document.createElement('li')

addList.textContent = 'This is a list item'

addToBody = document.body.append(addList)

addList = document.createElement('li')

addList.textContent = 'This is a list item 1'

addToBody = document.body.append(addList)

addList = document.createElement('li')

addList.textContent = 'This is a list item 2'

addToBody = document.body.append(addList)


/*//practice the DOM modifications.

    //modifying text and styles on a web page.
    let fakeIdModify = document.getElementById('fake-id')

    fakeIdModify.textContent = 'this is a fake modification'

    fakeIdModify.style.color = 'green'
    fakeIdModify.style.fontSize = '40px'
    fakeIdModify.style.textAlign = 'center'

//toggling class names on an off of an id that contains multiple classes.
let fakeIdModify1 = document.querySelector('#fake-id').className//retrieves all of the class names

fakeIdModify1 = document.querySelector('#fake-id').classList.toggle('.fake-class')//toggles off

console.log(fakeIdModify1)

fakeIdModify1 = document.querySelector('#fake-id').className

fakeIdModify1 = document.querySelector('#fake-id').classList.toggle('.fake-class')//toggles on

console.log(fakeIdModify1)

    //modifying the text content of an input element.
    let modifyText = document.getElementById('fake-id')//fake input element's id

    console.log(modifyText.value = 'this is text content')


//creating new elements using innerHTML
let addH2 = document.getElementById('the-section')

addH2.innerHTML += '<h2>New Heading</h2>'

addH2 = addH2.style.color = 'gold'

    //creating new html elements only with js.
    let addP = document.createElement('p')

    addP.textContent = 'This is a new paragraph.'

    document.body.append(addP)

    addP = addP.style.color = 'red'

//modifying the style of an element.
let editId = document.getElemenyById('fake-id')

editId.style.fontSize = '40px'

editId.style.color = 'orange'

    //modifying the text content of an element.
    let newText = document.getElementById('fake-id')

    newText.value = 'here is new text'

//modifying the value of the text content of an input element.
document.getElementById('fake-input').value = 'this is new text content.'

//modifying the value of the text content of an input element//stored in a variable.
let newTextContent = document.getElementById('newFake-input')
newTextContent.value = 'this is the most updated text content.'

    //creating a new element with DOM method createElement
    let newElementMod = document.createElement('p')

    newElementMod.textContent = 'this is a new DOM modification.'

    document.getElementById('a-main').append(newElementMod)

//toggling off/on all of an elements classes.
let toggledClasses = document.querySelector('#a-main').className

toggledClasses = document.querySelector('#a-main').classList.toggle('.added-class')

toggledClasses = document.querySelector('#a-main').className

toggledClasses = document.querySelector('#a-main').classList.toggle('.added-class')

//toggling classes on and off an element's id
document.querySelector('#id-fake').className
documen.querySelector('#id-fake').classList.toggle('.class')//toggles off

document.querySelector('#id-fake').className
documen.querySelector('#id-fake').classList.toggle('.class')//toggles on*/


//iterating through an array of data.
function addElements(){

    //global variable
    let devTools = [
        'html',
        'css',
        'javaScript',
        'ajax',
        'json',
        'jquery',
        'react.js'
    ]


    for(let i = 0; i < devTools.length; i++){

        let newLiElement = document.getElementById('tools-list')//accessing an id.

        newLiElement.innerHTML += '<li>' + devTools[i] + '</li>'//can use innerHTML to create a new element.
    }


    //global variable
    let newDevTools = [
        'node.js',
        'vs code',
        'macOs'
    ]

    //global variable
    let accessId = document.getElementById('tools-list')//accessing an id.

    for(let j = 0; j < newDevTools.length; j++){

        let addNewLiElement = document.createElement('li')

        addNewLiElement.textContent = newDevTools[j] 

        accessId.append(addNewLiElement)
    }
}
addElements()

//DOM practice
//accessing an element's id and modifying the text value.
let textMod = document.getElementById('text-content')
textMod.value = 'text modification'

textMod = document.getElementById('text-content1')
textMod.value = 'text modificaton'

textMod = document.getElementById('text-content2')
textMod.value = 'text modification'

//accessing an element's id and modifying the styles.
let styleMod = document.querySelector('#text-content')
styleMod.style.border = 'solid black 10px'
styleMod.style.textAlign = 'center'

styleMod = document.querySelector('#text-content1')
styleMod.style.border = 'solid black 10px'
styleMod.style.textAlign = 'center'

styleMod = document.querySelector('#text-content2')
styleMod.style.border = 'solid black 10px'
styleMod.style.textAlign = 'center'

//toggling an element's classes off and on
let showClasses = document.getElementById('h3-heading').className
console.log(showClasses)

showClasses = document.getElementById('h3-heading').classList.toggle('subHeading')
console.log(showClasses)

showClasses = document.getElementById('h3-heading').className

showClasses = document.getElementById('h3-heading').classList.toggle('subHeading')
console.log(showClasses)

//creating elements with createElement method.
//creating elements with innerHTML.

let addMod = document.querySelector('#the-section')

//can use //let addMod = document.getElementById

let latestMod = document.createElement('br')
addMod.append(latestMod)

latestMod = document.createElement('li')
latestMod.textContent = 'latest modification'

addMod.append(latestMod)

latestMod = document.createElement('li')
latestMod.textContent = 'latest modification 1'

addMod.append(latestMod)

latestMod = document.createElement('li')
latestMod.textContent = 'latest modification 2'

addMod.append(latestMod)


let modifyLinuxOs = document.getElementById('linux-tool')

function modifyListItemFun(){
    modifyLinuxOs.textContent = 'red hat linux'
}

modifyLinuxOs.addEventListener('click', modifyListItemFun)



let modifyBody = document.getElementById('windows-tool').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
})


let modifyWindowsOs = document.getElementById('windows-tool')

function modifyWindows(){
    modifyWindowsOs.textContent = 'windows 10 os'
}

modifyWindowsOs.addEventListener('click', modifyWindows)

let modifyMacOs = document.getElementById('macOs-tool')

function modifyMacVersion(){
    document.body.style.backgroundColor = 'green'

}
modifyMacOs.addEventListener('click', modifyMacVersion)//interpreted first

function modifyMacTextVersion(){
    console.log(modifyMacOs.textContent = 'macOs xiii')
}
modifyMacOs.addEventListener('click', modifyMacTextVersion)//interpreted second


//document.getElementById()
//document.querySelector()
//document.querySelectorAll()
//document.className()
//document.classList()
//.createElement()
//.append()
//innerHTML += '<>...</>'
//textContent = ...
























