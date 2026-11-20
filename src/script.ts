let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('Calcular') as HTMLElement;
let res = document.getElementById('resultado') as HTMLElement;

function somar(n1: number, n2: number){
    return n1 + n2   
}


botao.addEventListener('click', function (){
    res.innerHTML = somar(+numero1.value , +numero2.value).toString();
})