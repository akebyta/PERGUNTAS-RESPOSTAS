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
        enunciado: "3) VOCÊ PREFERE ESMALTES QUE OFERECEM UMA AMPLA GAMA DE CORES OU AQUELES COM UMA PALETA MAIS RESTRITA, MAIS SOFISTICADA?",
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
]




