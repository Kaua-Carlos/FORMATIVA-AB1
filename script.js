function salvarBotao(botao) {
    
    const textoDoBotao = botao.innerText;

    document.getElementById('selecionado').innerText = `Você selecionou: ${textoDoBotao}`;

    console.log("Botão selecionado:", textoDoBotao);
}
function surpresa(){
  window.open("https://www.youtube.com/watch?v=M9AIMqOEI0g&ab_channel=Gh0stX709%F0%9F%87%A7%F0%9F%87%B7", "_blank");
}
