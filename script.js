const container = document.getElementById('container');

const btn = document.createElement('button');
btn.setAttribute('id','btn')
document.body.prepend(btn)
console.log(btn)
btn.textContent = "Click Me!"
btn.addEventListener('click', e => {
    writeGrid(determineGridSize())
    sketch()
})

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('grid')
}

let gridSquares = document.querySelectorAll('.grid')

function removeGridDivs(){
    gridSquares = document.querySelectorAll('.grid')
    for (i = 0; i < gridSquares.length; i++){
        container.removeChild(gridSquares[i])
    }
}

function writeGrid(sizeResult) {
    removeGridDivs()
    let pixelSize = (288 / sizeResult) - 2;
    for (let i = 0; i < (sizeResult ** 2); i++) {
        let div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('grid')
    }
    console.log(pixelSize)
    gridSquares = document.querySelectorAll('.grid');
    console.log(gridSquares)

    for (i of gridSquares){
        i.style.width = `${pixelSize}px`
        i.style.height = `${pixelSize}px`
        }
    }

function determineGridSize() {
    const userSidelength = parseInt(prompt('How many squares per side?'));

    if (userSidelength > 100){
        alert('Please choose a number smaller than 100')
    }
    else if (userSidelength <= 100) {
    return userSidelength;
    }
}
function sketch() {
    gridSquares = document.querySelectorAll('.grid')
    for (square of gridSquares) {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('black')
        }
        )
        }
}
for (square of gridSquares) {
    square.addEventListener('mouseover', (e) => {
        e.target.classList.add('black')
    }
    )
    }





