
// selecting all the element in game board cell and make array cellElements
const cellElements = document.querySelectorAll('.game-board .cell')
const playerO="O"
const playerX="X"

console.log(cellElements)
cellElements.forEach(cell=>{
    cell.onclick=()=>{
        cell.classList.add("disabled")
        cell.innerHTML=playerO;
    }
})
   

    

