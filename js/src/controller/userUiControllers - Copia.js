var carrinhoAtual = [];
carrinhoAtual.valorTotal = 0;

function ocultaFeedback(){

function ocultaConteudo(){
	$(".addFeedback").fadeOut();
}
setTimeout(ocultaConteudo, 1000);

}

$(document).ready(function() {
	
$("#botaoAdicionar0").click(function() {
     
	 // Verifica se usuário inseriu um número válido
    if (isNaN(parseInt($("#quantidade0").val()))){
	$("#no-add").fadeIn();
	ocultaFeedback();
	}
	
	else{
	modificaQuantidadeDeObjeto(0,parseInt($("#quantidade0").val())); 
	renderizaResultados();
	$("#sucess-add").fadeIn();
	ocultaFeedback();
	}

});	
	

    
});
//Função atualiza valores do Objeto
function modificaQuantidadeDeObjeto(objetoID, quantidade){

	var objetoID = objetoID;
	var quantidade = quantidade;
    
	objetos[objetoID].quantidade = objetos[objetoID].quantidade + quantidade;
		
}



function debugDoSistema(){
	var x = 0;
	while(x<2){
	console.log(objetos[x].descricao);
	console.log(objetos[x].quantidade);
	x = x +1;
	}
}

function renderizaResultados(){
	$("#resumo-do-curso-conteudo").empty();
	// Verifica se quantidade do recurso é maior que 0, se sim, imprime na tela
		for(var i=0; i<objetos.length; i++){
		
		if ((objetos[i]).quantidade>0){
			
	$("#resumo-do-curso-conteudo").append("<br><h3>Recurso:</h3> "+ objetos[i].nome +"<br><h3>Quantidade:</h3>"+ objetos[i].quantidade);
			console.log('renderizou um resultado');
			}
	
}

			
	
	
}
	

