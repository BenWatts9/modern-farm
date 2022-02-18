export const Catalog = (harvestedFood) => {
    let container = document.getElementsByClassName("container")

    for (let i = 0; i < harvestedFood.length; i++) {
            container.innerHTML += `<section class="plant">${harvestedFood[i].type}</section>`
    }

}