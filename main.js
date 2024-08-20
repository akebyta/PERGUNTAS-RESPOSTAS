<script src="main.js"></script>
const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAltentativas = document.querySelector (".caixa-altentativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");

const perguntas = [
    {
        enunciado: "1) QUAL VOCẼ PREFERE QUANDO SE TRATA DE DURABILIDADE DO ESMALTE?",
        alternativas: [
            {
            texto: "a) Marcas conhecidas e renomadas",
            afirmacao: "."
            },

            {
            texto: "b) Marcas novas e independentes",
            afirmacao: "."
            },
        ]
   },
   {
        enunciado: "2) VOCÊ PREFERE ESMALTES COM ACABAMENTOS TRADICIONAIS OU INOVADORES?",
        alternativas: [
            {
            texto: "a) Acabamentos clássicos (cremosos, brilhantes)",
            afirmacao: "."
            },

            {
            texto: "b) Acabamentos inovadores (metálicos, holográficos, textualizados)",
            afirmacao: "."
            },
        ]
    },
    {
        enunciado: "3) QUAL FATOR É MAIS IMPORTANTE PARA VOCÊ AO ESCOLHER UM ESMALTE?",
        alternativas: [
            {
            texto: "a) Preço acessível",
            afirmacao: "."
            },

            {
            texto: "b) Fórmula livre de produtos químicos",
            afirmacao: "."
            },
        ]
    },
    {
        enunciado: "4) VOCÊ PREFERE ESMALTES QUE OFERECEM UMA AMPLA GAMA DE CORES OU AQUELES COM UMA PALETA MAIS RESTRITA, MAIS SOFISTICADA?",
        alternativas: [
            {
            texto: "a) Ampla gama de cores",
            afirmacao: "."
            },

            {
            texto: "b) Paleta restrita e sofisticada",
            afirmacao: "."
            },
        ]
    },
    {
        enunciado: "5) AO ESCOLHER UMA MARCA DE ESMALTE, VOCÊ VALORIZA MAIS A PRESENÇA EM LOJAS FÍSICAS OU A FACILIDADE DE COMPRA ONLINE?",
        alternativas: [
            {
            texto: "a) Presença em lojas físicas",
            afirmacao: "."
            },

            {
            texto: "b) Facilidade em compra online",
            afirmacao: "."
            },
        ]
}, 

] 

let atual = 0;
let perguntaAtual;
function mostraPergunta(){
    caixaAlternativas.textContent="";
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();






