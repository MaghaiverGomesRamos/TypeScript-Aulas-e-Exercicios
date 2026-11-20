"use strict";
function exibirProduto(produto) {
    if (produto.desconto) {
        return `Nome: ${produto.nome} Preço: ${produto.preco - produto.desconto}`;
    }
    else {
        return `Nome: ${produto.nome} Preço: ${produto.preco}`;
    }
}
let produtos = [];
produtos.push({ nome: 'maça', preco: 20 });
produtos.push({ nome: 'banana', preco: 30, desconto: 10 });
produtos.push({ nome: 'creme de barbear', preco: 25, desconto: 5 });

produtos.forEach(exibirProduto(produto));
