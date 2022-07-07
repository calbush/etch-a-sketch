const container = document.getElementById('container');
console.log(container)
/*let div = document.createElement('div')
container.appendChild(div)
*/



for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('grid')
}

const gridSquares = document.querySelectorAll('.grid')
console.log(gridSquares)

for (square of gridSquares) {
    square.addEventListener('mouseover', (e) => {
        e.target.classList.add('black')
    }
    )
}
