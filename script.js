const cardapio = document.getElementById("cardapio")
const mostrarCardapio = document.querySelector(".listarCardapio")
const aplicarDdesconto = document.querySelector(".aplicarDdesconto")


function formatarTipoMoeda(valor) {
    const valorFormatadoMoeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor)

    return valorFormatadoMoeda
}


function mostrar(arrayProdutos) {
    cardapio.innerHTML = ""

    arrayProdutos.forEach(element => {
        let li = document.createElement("li")

        li.innerHTML = `            
            <img src="${element.src}" alt="${element.nome}">
            <p>${element.nome}</p>
            <p class="preco-item">${formatarTipoMoeda(element.preco)}</p>            
        `

        cardapio.appendChild(li)
    });
}


function aplicaDescontoCardapio() {
    cardapio.innerHTML = ""

    const novoMenuOptions = menuOptions.map((item) => {
        const novoItem = {
            nome: item.nome,
            preco: item.preco * 0.9,
            vegano: item.vegano,
            src: item.src
        }
        return novoItem
    })

    mostrar(novoMenuOptions)
}


function valor_total() {
    cardapio.innerHTML = ""

    const valorTotalCardapio = menuOptions.reduce((acumulador, Item) => {
        return acumulador + Item.preco
    }, 0)

    const li = document.createElement("li")

    li.innerHTML = `
        <p>A soma de todos os itens do menu é: <br> ${formatarTipoMoeda(valorTotalCardapio)}</p>
    `

    cardapio.appendChild(li)
}


function exibe_veganos() {
    cardapio.innerHTML = ""

    const apenasVeganos = menuOptions.filter((hamburguer) => hamburguer.vegano ? true : false)

    mostrar(apenasVeganos)
}


mostrarCardapio.addEventListener("click", () => mostrar(menuOptions))
aplicarDdesconto.addEventListener("click", aplicaDescontoCardapio)