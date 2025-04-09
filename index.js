const imagensContainer = document.querySelector('.imagens-container'); 
// Seleciona o contêiner das imagens com a classe '.imagens-container' e armazena em uma variável

const imagens = document.querySelectorAll('.imagem'); 
// Seleciona todas as imagens com a classe '.imagem' e armazena em uma lista de NodeList

let currentIndex = 0; 
// Inicializa o índice da imagem atual como 0 (primeira imagem)

imagensContainer.addEventListener('click', () => { 
    // Adiciona um evento de clique no contêiner de imagens
    // Quando o contêiner é clicado, executa a função abaixo

    imagens[currentIndex].style.display = 'none'; 
    // Esconde a imagem atualmente visível (a imagem de índice 'currentIndex')

    currentIndex = (currentIndex + 1) % imagens.length; 
    // Calcula o índice da próxima imagem (incrementa o índice atual e usa o operador módulo para voltar ao início quando ultrapassar o número de imagens)

    imagens[currentIndex].style.display = 'block'; 
    // Exibe a próxima imagem com o índice calculado
});

// Navegação para a próxima ou anterior imagem no modal
fullScreenModal.addEventListener('click', (event) => { 
    // Adiciona um evento de clique no modal de tela cheia

    if (event.target === fullScreenImg) { 
        // Verifica se o alvo do clique é a imagem (fullScreenImg)
        currentIndex++; 
        // Avança para a próxima imagem

        if (currentIndex >= imagens.length) { 
            // Verifica se o índice atual ultrapassou o número de imagens
            currentIndex = 0; 
            // Se ultrapassou, volta para a primeira imagem
        }
        showImage(currentIndex); 
        // Chama a função 'showImage' para exibir a imagem no novo índice
    } else if (event.target === fullScreenModal) { 
        // Se o clique for fora da imagem (no próprio modal)
        fullScreenModal.style.display = 'none'; 
        // Fecha o modal definindo seu estilo 'display' como 'none'
    }
});
