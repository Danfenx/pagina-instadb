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
        "filme_noivo": "Ação"
    },
    noiva: {
        "cor-favorita-noiva": "Lilás",
        "bebida_noiva": "Chá",
        "animal_noiva": "Gato",
        "atividade_noiva": "Assistir TV",
        "filme_noiva": "Românce"
    }
};

function calcularPontuacao() {
    const formNoivo = document.querySelector(".questionario.noivo");
    const formNoiva = document.querySelector(".questionario.noiva");
    const resultadoDiv = document.getElementById("resultado");

    let pontuacaoNoivo = 0;
    let pontuacaoNoiva = 0;
    let todasRespondidas = true;
    const camposNaoRespondidos = [];

    // Verificando as perguntas do noivo
    for (const campo in respostasCorretas.noivo) {
        const resposta = respostasCorretas.noivo[campo];
        let inputSelecionado;

        // Verificando se o campo é do tipo select
        if (campo.includes('cor-favorita-noivo')) {
            inputSelecionado = formNoivo.querySelector([name="${campo}"]);
        } else {
            inputSelecionado = formNoivo.querySelector([name="${campo}"]:checked);
        }

        // Verificando se o campo foi respondido
        if (!inputSelecionado || (inputSelecionado && inputSelecionado.value === "")) {
            todasRespondidas = false;
            camposNaoRespondidos.push(Pergunta do Noivo sobre ${campo.replace(/-/g, ' ').replace(/_noivo/g, '')});
        } else if (inputSelecionado.value === resposta) {
            pontuacaoNoivo++;
        }
    }

    // Verificando as perguntas da noiva
    for (const campo in respostasCorretas.noiva) {
        const resposta = respostasCorretas.noiva[campo];
        let inputSelecionado;

        // Verificando se o campo é do tipo select
        if (campo.includes('cor-favorita-noiva')) {
            inputSelecionado = formNoiva.querySelector([name="${campo}"]);
        } else {
            inputSelecionado = formNoiva.querySelector([name="${campo}"]:checked);
        }

        // Verificando se o campo foi respondido
        if (!inputSelecionado || (inputSelecionado && inputSelecionado.value === "")) {
            todasRespondidas = false;
            camposNaoRespondidos.push(Pergunta da Noiva sobre ${campo.replace(/-/g, ' ').replace(/_noiva/g, '')});
        } else if (inputSelecionado.value === resposta) {
            pontuacaoNoiva++;
        }
    }

    // Exibindo o resultado final
    if (todasRespondidas) {
        resultadoDiv.innerHTML = `
            <p>Pontuação do Noivo: <strong>${pontuacaoNoivo}/5</strong></p>
            <p>Pontuação da Noiva: <strong>${pontuacaoNoiva}/5</strong></p>
        `;
    } else {
        resultadoDiv.innerHTML = <p style="color: red;">Por favor, responda todas as perguntas antes de enviar.</p>;
        if (camposNaoRespondidos.length > 0) {
            resultadoDiv.innerHTML += <p style="color: orange;">Campos não respondidos: ${camposNaoRespondidos.join(', ')}</p>;
        }
    }
}

   

    resultadoDiv.innerHTML = `
        <p>Pontuação do Noivo: <strong>${pontuacaoNoivo}/6</strong></p>
        <p>Pontuação da Noiva: <strong>${pontuacaoNoiva}/6</strong></p>
    `;
}
