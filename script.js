const holder = document.getElementById("holder")

const hoverHandle = (event) => {
  let x = event.target.style.backgroundColor
  if (x == null || x == undefined || x == "")
    event.target.style.backgroundColor = "rgba(0,0,0,0.1)"
  else {
    let n = Number.parseInt(x[16])
    if (n == 0) return
    if (n == 9) event.target.style.backgroundColor = "rgba(0,0,0,1.0)"
    else {
      n++
      event.target.style.backgroundColor = "rgba(0,0,0,0." + n + ")"
    }
  }
}
const noShadingHoverHandle = (event) => {
  event.target.className = "square squareHover"
}

const createGrid = (size, shade) => {
  holder.innerHTML = ""
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div")
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div")
      square.className = "square"
      square.style.height = 600 / size + "px"
      square.style.width = 600 / size + "px"
      square.addEventListener("mouseover", shade)
      row.appendChild(square)
    }
    holder.appendChild(row)
  }
}

const handleResize = () => {
  size = prompt("New grid size :")
  if (size >= 64) size = 16
  createGrid(size, shadingFunction)
}

const toggleShading = () => {
  if (isShading) shadingFunction = noShadingHoverHandle
  else shadingFunction = hoverHandle
  isShading = !isShading
  createGrid(size, shadingFunction)
}

let isShading = true
let size = 16
let shadingFunction = hoverHandle
const resize = document.getElementById("resize")
const shade = document.getElementById("shade")
shade.addEventListener("click", toggleShading)
resize.addEventListener("click", handleResize)

createGrid(size, shadingFunction)
