type Produto = {
    nome: string,
    preco: number,
    desconto?:number
}

function exibirProduto (produto: Produto):string{
    if (produto.desconto){
        return `Nome: ${produto.nome} Preco: ${produto.preco - produto.desconto}`
    } else {
         return `Nome: ${produto.nome} Preco: ${produto.preco}`
    }
}

let produtos: Produto[] = []

produtos.push({nome: 'maca', preco: 20})
produtos.push({nome: 'banana', preco: 30, desconto: 10})
produtos.push({nome: 'creme de barbear', preco: 25, desconto: 5})

produtos.forEach((produto) => {
    console.log(exibirProduto(produto))
})

