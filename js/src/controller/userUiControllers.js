var carrinhoAtual = [];
carrinhoAtual.valorTotal = 0;

function ocultaFeedback(){

function ocultaConteudo(){
	$(".addFeedback").fadeOut();
}
setTimeout(ocultaConteudo, 1000);

}

$(document).ready(function() {

/* Crias as actions para cada botão que adiciona itens */
$("#botaoAdicionar0").click(function(){
adicionaItemNoCarrinho(0);
});

$("#botaoAdicionar1").click(function(){
adicionaItemNoCarrinho(1);
});	

$("#botaoAdicionar2").click(function(){
adicionaItemNoCarrinho(2);
});	

$("#botaoAdicionar3").click(function(){
adicionaItemNoCarrinho(3);
});	

$("#botaoAdicionar4").click(function(){
adicionaItemNoCarrinho(4);
});	

$("#botaoAdicionar5").click(function(){
adicionaItemNoCarrinho(5);
});	

$("#botaoAdicionar6").click(function(){
adicionaItemNoCarrinho(6);
});	

$("#botaoAdicionar7").click(function(){
adicionaItemNoCarrinho(7);
});	

$("#botaoAdicionar8").click(function(){
adicionaItemNoCarrinho(8);
});	

$("#botaoAdicionar9").click(function(){
adicionaItemNoCarrinho(9);
});	

$("#botaoAdicionar10").click(function(){
adicionaItemNoCarrinho(10);
});	

$("#botaoAdicionar11").click(function(){
adicionaItemNoCarrinho(11);
});		

$("#botaoAdicionar12").click(function(){
adicionaItemNoCarrinho(12);
});	

$("#botaoAdicionar13").click(function(){
adicionaItemNoCarrinho(13);
});	

$("#botaoAdicionar14").click(function(){
adicionaItemNoCarrinho(14);
});	

$("#botaoAdicionar15").click(function(){
adicionaItemNoCarrinho(15);
});	

$("#botaoAdicionar16").click(function(){
adicionaItemNoCarrinho(16);
});	

$("#botaoAdicionar17").click(function(){
adicionaItemNoCarrinho(17);
});	

$("#botaoAdicionar18").click(function(){
adicionaItemNoCarrinho(18);
});	

$("#botaoAdicionar19").click(function(){
adicionaItemNoCarrinho(19);
});	

$("#botaoAdicionar20").click(function(){
adicionaItemNoCarrinho(20);
});	

$("#botaoAdicionar21").click(function(){
adicionaItemNoCarrinho(21);
});	

$("#botaoAdicionar22").click(function(){
adicionaItemNoCarrinho(22);
});	

$("#botaoAdicionar23").click(function(){
adicionaItemNoCarrinho(23);
});	



function adicionaItemNoCarrinho(objeto){
	
	
	 // Verifica se usuário inseriu um número válido
    if (isNaN(parseInt($("#quantidade"+objeto).val()))){
	$(".no-add").fadeIn();
	ocultaFeedback();
	}
	
	else{
	modificaQuantidadeDeObjeto(objeto,parseInt($("#quantidade"+objeto).val())); 
	renderizaResultados();
	$(".sucess-add").fadeIn();
	ocultaFeedback();
	}	

}
	

    
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
			
	$("#resumo-do-curso-conteudo").append("<br><h3>Recurso: </h3> "+ objetos[i].nome +"<br><h3>Quantidade: </h3>"+ objetos[i].quantidade +"<br>"+ "<h3>Total:</h3> R$ "+ objetos[i].quantidade*objetos[i].custo+"<br>");
			console.log('renderizou um resultado');
		}
		}
}

function renderizaTabelasDeAtributos(){
var n = 0;
for (n=0; n<=objetos.length; n++){

$("#atributos-conteudo"+n).eq(0).find('td').eq(0).append(" "+objetos[1].tecnica);
$("#atributos-conteudo"+n).eq(0).find('td').eq(2).append(" "+objetos[1].pedagogica);
$("#atributos-conteudo"+n).eq(0).find('td').eq(4).append(" "+objetos[1].acompanhamento);
$("#atributos-conteudo"+n).eq(0).find('td').eq(6).append(" "+objetos[1].visual);
$("#atributos-conteudo"+n).eq(0).find('td').eq(8).append(" "+objetos[1].textual);
$("#atributos-conteudo"+n).eq(0).find('td').eq(10).append(" "+objetos[1].social);
$("#atributos-conteudo"+n).eq(0).find('td').eq(12).append(" "+objetos[1].interativo);
$("#atributos-conteudo"+n).eq(0).find('td').eq(14).append(" "+objetos[1].custo);
$("#atributos-conteudo"+n).eq(0).find('td').eq(16).append(" "+objetos[1].unidade);

}




}

// Função responsável por redenrizar os atributos de todos os objetos do cardápio

	

