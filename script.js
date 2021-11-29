


// aqui eu pego o valor do input pelo acionamento do botão VQV para usar como 'n'
const btn2 = document.getElementById("generate-board")
const inputSize = document.getElementById("board-size")

btn2.addEventListener('click', boardSize)

let n = 5

let blankBlocks = document.getElementsByClassName('pixel')

function boardSize() {
    if(inputSize.value <= 0){
        alert('Board inválido!')
    } else if(inputSize.value < 5) {
        n = 5
        createBoard(n)
    } else if(inputSize.value > 50) {
        n = 50
        createBoard(n)
    } else {
        n = inputSize.value
        // console.log(inputSize.value)
        createBoard(n)
    }
    
    for(let i3 = 0; i3 < blankBlocks.length; i3 += 1) {
        blankBlocks[i3].addEventListener('click', useColor) // tinha fazer isso for de novo
    }

    
}   


const local = document.getElementById("pixel-board")


function createBoard(n) {
    local.innerHTML = ''
    for(let u = 0; u < (n*n); u += 1 ) {
      let block = document.createElement("div")
      block.className = 'pixel'
      block.style.backgroundColor = 'white'
      local.appendChild(block)
    }
    local.style.width = ((40 + 2)* n) + 'px'
    local.style.height = ((40 + 2)* n) + 'px'
}
createBoard(n)




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

blankBlocks[0].addEventListener('click', test)

function test() {
    console.log('foi')
}

let numA1 = Math.round(Math.random()*255)
let numA2 = Math.round(Math.random()*255)
let numA3 = Math.round(Math.random()*255)

let rgbName1 = 'rgb(' + numA1 + ',' + numA2 + ',' + numA3 + ')'

let numB1 = Math.round(Math.random()*255)
let numB2 = Math.round(Math.random()*255)
let numB3 = Math.round(Math.random()*255)

let rgbName2 = 'rgb(' + numB1 + ',' + numB2 + ',' + numB3 + ')'

let numC1 = Math.round(Math.random()*255)
let numC2 = Math.round(Math.random()*255)
let numC3 = Math.round(Math.random()*255)

let rgbName3 = 'rgb(' + numC1 + ',' + numC2 + ',' + numC3 + ')'



colorBlocks[1].style.backgroundColor = rgbName1
colorBlocks[2].style.backgroundColor = rgbName2
colorBlocks[3].style.backgroundColor = rgbName3
