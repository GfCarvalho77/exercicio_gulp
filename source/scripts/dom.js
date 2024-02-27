// Função para adicionar um evento de clique ao botão
function handleClick() {
    // Altere a cor do título da página para verde
    document.getElementById("titulo").style.color = "green";
    // Altere o texto do parágrafo
    document.getElementById("paragrafo").innerHTML = "O botão foi clicado!";
  }
  
  // Adicione um evento de clique ao botão
  document.getElementById("botao").addEventListener("click", handleClick);