
var anlVisual = 0;
var objetosSelecionados =[];
// Responsável por realizar as estimativas finais do curso 


// A função a baixo já está funcionando! UTILIZAR ELA - TODOS OS OBJETOS SELECIONADOS CHEGAM NESTE ARRAY

// identifca objetos que foram selecionados e colocar em Array ObjetosSelecionados
function identificaSelecionados(){
for(var i=0; i<=50; i++){
if(objetos[i].quantidade > 0){
objetosSelecionados.push(objetos[i]);
}
}	

console.log(objetosSelecionados);	

}





//% Visual:
function gerarVisual(){
	
// Necessário substituir todos os <=50 por objetos.length!
for(var i=0; i<=50; i++){
	anlVisual = anlVisual+ parseInt(objetos[i].visual);

	}
$("#td-visual").append(anlVisual);
}

//% Textual:
//% Social:
//% Interativo:
//Complexidade técnica:
//Complexidade pedagógica:
//Complexidade de acompanhamento:
//Recursos utilizados:
//Custo total estimado:
//Quantidade estimada de laudas:
//Quantidade ideal de imagens:
//Quantidade de imagens incluídas:
//Tempo estimado de produção:
//Profissionais envolvidos (DI):
//Profissionais envolvidos (Tarefas especialistas):
//Profissionais envolvidos (Outros):























