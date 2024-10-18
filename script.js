let cardapio = document.getElementById("cardapio")

function mostrar_tudo() {    
    cardapio.innerHTML = ""
   
    
    menuOptions.forEach(element => {
        let li = document.createElement("li")

        const valorFormatadoMoeda = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(element.preco)

        
        li.innerHTML = `            
            <img src="${element.src}" alt="${element.nome}">
            <p>${element.nome}</p>
            <p class="preco-item">${valorFormatadoMoeda}</p>            
        `        
        
        cardapio.appendChild(li)
    });
}


function aplicar_desconto() {    
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
    
    novoMenuOptions.forEach(element => {        
        let li = document.createElement("li")
       
        const valorFormatadoMoeda = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(element.preco)
        
        li.innerHTML = `            
            <img src="${element.src}" alt="${element.nome}">
            <p>${element.nome}</p>
            <p class="preco-item">${valorFormatadoMoeda}</p>            
        `        
        cardapio.appendChild(li)
    });
}


function valor_total() {  
    cardapio.innerHTML = ""
    
    const valorTotalCardapio = menuOptions.reduce((acumulador, Item) => {
        return acumulador + Item.preco
    }, 0)
    
    const valorFormatadoMoeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorTotalCardapio)

 
    const li = document.createElement("li")
    
    li.innerHTML = `
        <p>A soma de todos os itens do menu é: <br> ${valorFormatadoMoeda}</p>
    `
    
    cardapio.appendChild(li)
}

function exibe_veganos() {    
    cardapio.innerHTML = ""
  
    const apenasVeganos = menuOptions.filter((hamburguer) => hamburguer.vegano ? true : false)
    
    apenasVeganos.forEach(hamburguer => {        
        const li = document.createElement("li")
       
        const valorFormatadoMoeda = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(hamburguer.preco)
        
        li.innerHTML = `
            <img src=${hamburguer.src} alt=${hamburguer.nome}>
            <p>${hamburguer.nome}</p>
            <p class="preco-item">${valorFormatadoMoeda}</p>
        `
        
        cardapio.appendChild(li)
    });
}