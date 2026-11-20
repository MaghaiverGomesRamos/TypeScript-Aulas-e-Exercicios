"use strict";
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('Calcular');
let res = document.getElementById('resultado');
function somar(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = somar(+numero1.value, +numero2.value).toString();
});
