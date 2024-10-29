/*selecting a node from the DOOM*/
const divItemsText = document.querySelector('.container__items')
/*to add content to a node*/
divItemsText.textContent = 'Div wrote by js DOM even.'

/*selecting a node from the DOOM*/
const container = document.querySelector('#container')

/*Creating an node to add in the DOOM !this dont change de html!*/
const content = document.createElement('div')
/*to add style to the node*/
content.style.cssText = 'color: white; background-color: black; padding: 15px; overflow: auto;'
content.classList.add('content')
container.appendChild(content)


/*Creating an node to add in the DOOM !this dont change de html!*/
const text = document.createElement('h2')

/*to add a class to the node we created*/
text.classList.add('content__header')

text.textContent = "Hi im the h2"

/*to add the node we created to a parend, !will be inside his parent!*/
content.appendChild(text)

const para = document.createElement('p')
para.classList.add('content__p')
para.textContent = 'Hi, im the paragrah'
content.appendChild(para)
para.style.cssText =  'overflow-wrap: wrap;'

/*---------------------EVENTS----------------------------------------------*/
/*Second way to add an event*/
const btn = document.querySelector('#btn')
btn.onclick = () => alert('Hi, you clicked me!!!!!')

/*AddEventListener*/
/* alvo.addEventListener(type,listener[, options]);
alvo.addEventListener(type,listener[, useCapture, wantUntrusted Non-standard]);  */


/*Second way to add an event, this is more flexible and powerful*/
const btn3 = document.querySelector('#btn3')
btn3.addEventListener(
    'click', () =>{
        alert('Nice you clickme by and eventListener function!!')
    }
)
/*---Itering on a group of node using SelectorALL-----------------------*/
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (button.id === 1){
            alert(`Este es el botton con el id: ${button.id}`)
        }
        else if (button.id === 2){
            alert(`Este es el botton con el id: ${button.id}`)
        }
        else {
            alert(`Este es el botton con el id: ${button.id}`)
        }
        

    })
    
});



