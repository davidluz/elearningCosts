function criaObjetos(){
var arrayRecebido = [
    {
      "nome": "Tela Simples",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "65",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Tela Dinamica",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "150",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Animação de baixa Complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "90",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Animação de media complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "110",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Animação de media complexidade com audio",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "150",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Animação de alta complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "450",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Ilustração de Baixa Complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "550",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Ilustração de Média Complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "70",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Ilustração de Alta Complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "112",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "História em Quadrinhos",
      "descricao": "vazio",
      "unidade": "Pagina com 10 quadros",
      "natureza": "Produção de Material Multimidia",
      "custo": "112",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Projeto Gráfico por curso",
      "descricao": "vazio",
      "unidade": "unidade de projeto",
      "natureza": "Produção de Material Multimidia",
      "custo": "600",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Tratamento de Imagens",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "820",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Personagem de baixa complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "30",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Personagem de media complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "250",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Personagem de media complexidade com audio",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "450",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Personagem de alta complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "550",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Jogo pedagógico para exercicos e avaliacao de baixa complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "750",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Jogo pedagógico para exercicios e avaliacoes de media complexidade",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "250",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Jogo pedagógico com locucao para exercicios e avaliacoes",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "350",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Desenvolvimento de cenário 3D",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "1450",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Demonstrativo de curso – curta duração",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "420",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Demonstrativo de curso",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "840",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Captura de imagens",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "950",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Locução",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Produção de Material Multimidia",
      "custo": "120",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Locução em outro idioma",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Produção de Material Multimidia",
      "custo": "180",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Efeito Sonoro",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "100",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Produção CD Rom / DVD Rom",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "130",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Programação SCORM",
      "descricao": "vazio",
      "unidade": "unidade",
      "natureza": "Produção de Material Multimidia",
      "custo": "130",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Produção de Video",
      "descricao": "vazio",
      "unidade": "minuto de video finalizado",
      "natureza": "Produção de Material Multimidia",
      "custo": "1900",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Especialista no Desenvolvimento de aplicativos móveis",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Produção de Material Multimidia",
      "custo": "140",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Especialista em Desenvolvimento de Games",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Produção de Material Multimidia",
      "custo": "140",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Acompanhamento do projeto (reuniao com ate 6 horas)",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Produção de Material Multimidia",
      "custo": "1200",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Workshop para desenvolvimento de modelagem(duracao 5 horas)",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Produção de Material Multimidia",
      "custo": "800",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Atualização de conteudo educacional (ja desenvolvido)",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Produção de Material Multimidia",
      "custo": "350",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Especialista em Ambientes Virtuais de Aprendizagem",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Ambiente Virtual de Aprendizagem",
      "custo": "160",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Tutoria de baixa Complexidade",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Ambiente Virtual de Aprendizagem",
      "custo": "75",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Tutoria de Media Complexidade",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Ambiente Virtual de Aprendizagem",
      "custo": "120",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Tutoria de Alta Complexidade",
      "descricao": "vazio",
      "unidade": "hora",
      "natureza": "Ambiente Virtual de Aprendizagem",
      "custo": "140",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Diagramação",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Material Impresso",
      "custo": "50",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Digitação de Textos",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Material Impresso",
      "custo": "25",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Escaneamento de Elementos",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Material Impresso",
      "custo": "20",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Revisao técnica",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Material Impresso",
      "custo": "50",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Revisão gramatical",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Material Impresso",
      "custo": "40",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Desenho Instrucional",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Criação",
      "custo": "90",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Análise e Relatorio Contextual",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Criação",
      "custo": "120",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Tradução de Conteudos",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Criação",
      "custo": "150",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Criação de Roteiros e Storyboards",
      "descricao": "vazio",
      "unidade": "tela",
      "natureza": "Criação",
      "custo": "80",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Storyboard",
      "descricao": "vazio",
      "unidade": "tela",
      "natureza": "Criação",
      "custo": "100",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Desenvolvimento de Conteudos de Baixa Complexidade",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Criação",
      "custo": "100",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Desenvolvimento de Conteudos de Média Complexidade",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Criação",
      "custo": "150",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    },
    {
      "nome": "Desenvolvimento de Conteudos de Alta Complexidade",
      "descricao": "vazio",
      "unidade": "lauda",
      "natureza": "Criação",
      "custo": " 200",
      "tecnica": "1",
      "pedagogica": "1",
      "acompanhamento": "1",
      "visual": "1",
      "textual": "1",
      "interativo": "1", "social": "1"
    }
  ];
  
 
 //Clona os objetos do Array Recebido e coloca no Objetos 
for(var i=0; i<=arrayRecebido.length; i++){
	var stringFormatada = "objeto"+i;
	this[stringFormatada]= arrayRecebido[i];
	
}
}



function colocaObjetosNoArrayObjetos(){
objetos.push(objeto0);
objetos.push(objeto1);
objetos.push(objeto2);
objetos.push(objeto3);
objetos.push(objeto4);
objetos.push(objeto5);
objetos.push(objeto6);
objetos.push(objeto7);
objetos.push(objeto8);
objetos.push(objeto9);
objetos.push(objeto10);
objetos.push(objeto11);
objetos.push(objeto12);
objetos.push(objeto13);
objetos.push(objeto14);
objetos.push(objeto15);
objetos.push(objeto16);
objetos.push(objeto17);
objetos.push(objeto18);
objetos.push(objeto19);
objetos.push(objeto20);
objetos.push(objeto21);
objetos.push(objeto22);
objetos.push(objeto23);
}


function guardaObjetosNoStorage(){
var objetosString = JSON.stringify(objetos);
localStorage.setItem("objetosSTORAGE", objetosString);	
}

function recuperaObjetosNoStorage(){
var objetosRecuperados = localStorage.getItem("objetosSTORAGE");
var objetosRecuperadosJason = JSON.parse(objetosRecuperados);
}

function calcultaTotalDoCarrinho(){
for(var i=0; i<objetos.length; i++){
valorTotal = valorTotal+(objetos[i].quantidade)*(objetos[i].custo);
}
return(valorTotal);
}
