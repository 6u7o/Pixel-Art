const divPai = document.getElementById('divPai')

function addClassToAll() {
    for(let i = 0; i < divPai.children.length; i += 1) {
        divPai.children[i].className = 'block'
    }
}

addClassToAll()

const colorBlocks = document.getElementsByClassName('color')


for(let i2 = 0; i2 < colorBlocks.length; i2 += 1) {
    colorBlocks[i2].addEventListener('click', getColor) 
    console.log('ha')
}

let currentBlock;
let currentColor;

function getColor(evt) {
    currentBlock = window.getComputedStyle(evt.target)  // tinha aprendido (e referênciado) este método no exercicio do dia5-3.

    // console.log(evt.target)
    currentColor = currentBlock.backgroundColor
    // console.log(currentColor)
}

const blankBlocks = document.getElementsByClassName('block')

for(let i3 = 0; i3 < blankBlocks.length; i3 += 1) {
    blankBlocks[i3].addEventListener('click', useColor) 
}

function useColor(evt) {
    evt.target.style.backgroundColor = currentColor
    // console.log(evt.target)
}


// let color1 = colorBlocks[0]

// let blockCS = window.getComputedStyle(color1)

// console.log(blockCS.backgroundColor)