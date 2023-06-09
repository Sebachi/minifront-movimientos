const tBodyproducts = document.getElementById('tBodyProducts')
const URL_API = "https://miniback-movimientos-xns7.onrender.com/movimientos"


const getProducts = async () => {
    const response = await fetch(URL_API);
    const data = await response.json();
    tBodyproducts.innerHTML = "";
    data.forEach(element => {
        tBodyproducts.innerHTML += `
        <tr id="${element.id}">
        <td>${element.id}</td>
        <td>${element.description}</td>
        <td>${element.price}</td>
        <td>${element.type}</td>

    </tr>
        `
    })
}
getProducts()

