function playVideo() {
    var video = document.getElementById('video');
    var playButton = document.querySelector('.play-button');
    
    // Se o vídeo estiver pausado, começa a reprodução
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';  // Esconde o botão de play após iniciar o vídeo
    }
  } 

document.addEventListener("DOMContentLoaded", () => {
    const questoes = [
        {
            pergunta: "💸Você sabia que é possível faturar até <span>R$ 9.000</span> em um único mês vendendo panetones personalizados?💸",
            respostas: ["Sim, já sabia!", "Não, mas estou curioso!"]
        },
        {
            pergunta: "Se você pudesse vender panetones personalizados, quanto você gostaria de <span>faturar</span> no próximo Natal?",
            respostas: ["Até R$ 3.000", "Entre R$ 3.000 e R$ 9.000", "Mais de R$ 9.000, com certeza!"]
        },
        {
            pergunta: "Você já tem alguma experiência com confeitaria ou panetones?",
            respostas: ["Sim, já faço algumas receitas de panetone.", "Não, nunca fiz panetones antes, mas tenho vontade de aprender.", "Não, mas já trabalhei com vendas e estou disposto a aprender."]
        },
        {
            pergunta: "O que acha da ideia de personalizar os panetones com recheios e decorações <span>exclusivas</span>?",
            respostas: ["Parece incrível! Eu adoraria criar panetones únicos.", "Acho interessante, mas não sei se conseguiria fazer sozinho(a).", "Não sei muito sobre isso, mas adoraria aprender."]
        },
        {
            pergunta: "Você gostaria de aprender <span>estratégias</span> para ajudar a vender seus panetones, tanto <span>online</span> quanto <span>offline</span>?",
            respostas: ["Sim, preciso de estratégias eficazes para vender.", "Talvez, se for fácil e prático.", "Não sei se preciso, mas gostaria de entender melhor."]
        },
        {
            pergunta: "Se você pudesse criar <span>panetones personalizados</span>, com embalagens incríveis e vender para clientes no Natal, o que isso representaria para você?",
            respostas: ["Uma renda extra e uma oportunidade incrível de crescer.", "A chance de fazer meu próprio negócio e faturar mais.", "Apenas uma maneira de aproveitar o Natal e ganhar um dinheiro extra."]
        }
    ];

    let perguntaAtual = 0;
    const totalPerguntas = questoes.length;

    const perguntaElement = document.getElementById('text_quiz');
    const mainQuizElement = document.querySelector('.main_quiz');
    const header_pgBar = document.getElementById('header_pgbar')
    const progressBar = document.getElementById('progressBar');
    const container_quiz = document.querySelector('.container_quiz');
    const pdp = document.getElementById('pdp');
    // lp
    const container_lp = document.querySelector('.container_lp');

    function atualizarBarraProgresso() {
        const progresso = ((perguntaAtual + 1) / totalPerguntas) * 100;
        progressBar.style.width = `${progresso}%`;
    }

    function mostrarPergunta() {
        const pergunta = questoes[perguntaAtual];
        perguntaElement.innerHTML = pergunta.pergunta;
        mainQuizElement.innerHTML = ''; // Limpa os botões antigos

        pergunta.respostas.forEach((resposta, index) => {
            const btn = document.createElement('button');
            btn.classList.add('btns', 'fade');
            btn.innerHTML = resposta;
            btn.addEventListener('click', () => {
                perguntaAtual++;
                if (perguntaAtual < totalPerguntas) {
                    mostrarPergunta();
                    atualizarBarraProgresso();
                } else {
                    header_pgBar.style.display = 'none'
                    container_quiz.style.display = 'none'
                    container_lp.style.display = 'block'
                    pdp.style.display = 'none'
                }
            });
            mainQuizElement.appendChild(btn);
        });

        atualizarBarraProgresso(); // Atualiza a barra ao mostrar a pergunta
    }

    mostrarPergunta();
});