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

let currentColor;

function getColor(evt) {
    // currentColor = evt.target.style.backgroundColor
    // evt.target.style.backgroundColor = 'orange'
    console.log(evt.target.style.backgroundColor)
}

// const blankBlocks = document.getElementsByClassName('block')

// for(let i3 = 0; i3 < blankBlocks.length; i3 += 1) {
//     blankBlocks[i3].addEventListener('click', useColor) 
// }

// function useColor(evt) {
//     evt.target.backgroundColor = currentColor
// }