// Controle de imagens
const imagensContainer = document.querySelector('.imagens-container');
const imagens = document.querySelectorAll('.imagem');
let currentIndex = 0;

imagens.forEach((img, index) => {
    if (index !== 0) img.style.display = 'none';
});

imagensContainer.addEventListener('click', () => {
    imagens[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % imagens.length;
    imagens[currentIndex].style.display = 'block';
});

// Comentei isso porque as variáveis fullScreenModal e fullScreenImg não foram declaradas
// const fullScreenModal = document.getElementById('fullScreenModal');
// const fullScreenImg = document.getElementById('fullScreenImg');

// fullScreenModal.addEventListener('click', (event) => {
//     if (event.target === fullScreenImg) {
//         currentIndex = (currentIndex + 1) % imagens.length;
//         showImage(currentIndex);
//     } else if (event.target === fullScreenModal) {
//         fullScreenModal.style.display = 'none';
//     }
// });

// Questionário
const respostasCorretas = {
    noivo: {
        "cor-favorita-noivo": "Azul",
        "bebida_noivo": "Chá",
        "animal": "Cachorro",
        "atividade_noivo": "Praticar esportes",
        "filme_noivo": "Ação",
        "Local_noiva": "Ilha deserta"
    },
    noiva: {
        "cor-favorita-noiva": "Lilás",
        "bebida_noiva": "Chá",
        "animal_noiva": "Gato",
        "atividade_noiva": "Assistir TV",
        "filme_noiva": "Românce",
        "Local_noiva": "Shopping"
    }
};

function calcularPontuacao() {
    const formNoivo = document.querySelector(".questionario.noivo");
    const formNoiva = document.querySelector(".questionario.noiva");
    const resultadoDiv = document.getElementById("resultado");

    let pontuacaoNoivo = 0;
    let pontuacaoNoiva = 0;
    let todasRespondidas = true;

    for (const campo in respostasCorretas.noivo) {
        const resposta = respostasCorretas.noivo[campo];
        const inputSelecionado = formNoivo.querySelector([name="${campo}"]:checked) ||
                                 formNoivo.querySelector([name="${campo}"]);

        if (!inputSelecionado || inputSelecionado.value === "") {
            todasRespondidas = false;
        }

        if (inputSelecionado && inputSelecionado.value === resposta) {
            pontuacaoNoivo++;
        }
    }

    for (const campo in respostasCorretas.noiva) {
        const resposta = respostasCorretas.noiva[campo];
        const inputSelecionado = formNoiva.querySelector([name="${campo}"]:checked) ||
                                 formNoiva.querySelector([name="${campo}"]);

        if (!inputSelecionado || inputSelecionado.value === "") {
            todasRespondidas = false;
        }

        if (inputSelecionado && inputSelecionado.value === resposta) {
            pontuacaoNoiva++;
        }
    }

   

    resultadoDiv.innerHTML = `
        <p>Pontuação do Noivo: <strong>${pontuacaoNoivo}/6</strong></p>
        <p>Pontuação da Noiva: <strong>${pontuacaoNoiva}/6</strong></p>
    `;
}
