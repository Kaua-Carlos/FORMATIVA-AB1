let display = document.getElementById("display");

function adicionarValor(valor) {
    display.value += valor;
}
function surpresa(){
  alert('Hehehe');
}
function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}
