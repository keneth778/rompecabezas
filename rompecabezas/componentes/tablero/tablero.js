import { todasLasCartas } from "./data.js"

function item(contenido){
    let div = document.createElement('div')
    div.innerText = contenido
    div.className = "carta"

    return div
}


function cargarCartas(todasLasCartas){

    let div = document.createElement('div')
    div.className = "divTablero"
    
    todasLasCartas.forEach((letra)=>{div.appendChild(item(letra))})


    return div
}

export { cargarCartas };