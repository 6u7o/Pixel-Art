const divPai = document.getElementById('pixel-board')

function addClassToAll() {
    for(let i = 0; i < divPai.children.length; i += 1) {
        divPai.children[i].className = 'pixel'
    }
}

addClassToAll()

const colorBlocks = document.getElementsByClassName('color')

for(let i2 = 0; i2 < colorBlocks.length; i2 += 1) {
    colorBlocks[i2].addEventListener('click', getColor) 
}

let currentBlock;
let currentColor = 'black'

function getColor(evt) {
    colorBlocks[0].className = 'color black'
    colorBlocks[1].className = 'color red'
    colorBlocks[2].className = 'color blue'
    colorBlocks[3].className = 'color green'
    evt.target.className += ' selected'
    currentBlock = window.getComputedStyle(evt.target)
    currentColor = currentBlock.backgroundColor
}

const blankBlocks = document.getElementsByClassName('pixel')

for(let i3 = 0; i3 < blankBlocks.length; i3 += 1) {
    blankBlocks[i3].addEventListener('click', useColor) 
}

function useColor(evt) {
    evt.target.style.backgroundColor = currentColor
}


const btn = document.getElementById('clear-board')

btn.addEventListener('click', clearBoard)

function clearBoard() {
    for(let i3 = 0; i3 < blankBlocks.length; i3 += 1) {
        blankBlocks[i3].style.backgroundColor = 'white'
    }
}