const container = document.getElementById('container');

const btn = document.createElement('button');
btn.setAttribute('id','btn')
document.body.prepend(btn)
console.log(btn)
btn.textContent = "Click Me!"
btn.addEventListener('click', setGridSize)


function setGridSize () {
    const squareSize = parseInt(prompt('How many squares per side?'));

    if (squareSize > 100){
        alert('Please choose a number smaller than 100')
    }
    else if (squareSize <= 100) {
    const pixelSize = 288 / squareSize;
    const compensateForBorder = pixelSize - 2;
    const totalSquares = squareSize ** 2;
    console.log(totalSquares)

    for (let i = 0; i < totalSquares; i++) {
        let div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('grid')
    }

    const gridSquares = document.querySelectorAll('.grid')

   
    for (i of gridSquares){
        i.style.width = `${compensateForBorder}px`
        i.style.height = `${compensateForBorder}px`
        }

    for (square of gridSquares) {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('black')
        }
        )
        }
    }
}





