var carrinhoAtual = [];
carrinhoAtual.valorTotal = 0;

function ocultaFeedback(){

function ocultaConteudo(){
	$(".addFeedback").fadeOut();
}
setTimeout(ocultaConteudo, 1000);

}

$(document).ready(function() {

//Botões responsável por adicionar e remover itens na tela de resumo do curso




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
    
	objetos[objetoID].quantidade = parseInt(objetos[objetoID].quantidade + quantidade);
		
}



function debugDoSistema(){
	var x = 0;
	while(x<2){
	
	x = x +1;
	}
}

function renderizaResultados(){

	$("#resumo-do-curso-conteudo").empty();
	// Verifica se quantidade do recurso é maior que 0, se sim, imprime na tela
		for(var i=0; i<50; i++){
		
		if ((objetos[i]).quantidade>0){
			
	$("#resumo-do-curso-conteudo").append("<br><h3>Recurso: </h3> "+ objetos[i].nome +"<br><h3>Valor unitário: R$</h3> <input type='number' min='0' value= "+objetos[i].custo+"></input><br><h3>Quantidade: </h3>  <input type='number' min='0' value= "+objetos[i].quantidade+" ></input> <br>");
			
		}
		}
}




function renderizaTabelasDeAtributos(){
var n = 0;
for (n=0; n<=50; n++){

$("#atributos-conteudo"+n).eq(0).find('td').eq(0).append(" "+objetos[n].tecnica);
$("#atributos-conteudo"+n).eq(0).find('td').eq(2).append(" "+objetos[n].pedagogica);
$("#atributos-conteudo"+n).eq(0).find('td').eq(4).append(" "+objetos[n].acompanhamento);
$("#atributos-conteudo"+n).eq(0).find('td').eq(6).append(" "+objetos[n].visual);
$("#atributos-conteudo"+n).eq(0).find('td').eq(8).append(" "+objetos[n].textual);
$("#atributos-conteudo"+n).eq(0).find('td').eq(10).append(" "+objetos[n].social);
$("#atributos-conteudo"+n).eq(0).find('td').eq(12).append(" "+objetos[n].interativo);
$("#atributos-conteudo"+n).eq(0).find('td').eq(14).append(" "+"R$"+ objetos[n].custo);
$("#atributos-conteudo"+n).eq(0).find('td').eq(16).append(" "+objetos[n].unidade);

}


$("#estimar").click(function(e) {
    $("#home-simulador").hide();
	  $("#home-cardapio").hide();
	 	$.fancybox.close();
	$("#tela-final-profissionais").fadeIn();
	$('#image-header').attr('src', 'img/etapas-3.png');
	identificaSelecionados();
});


$("#avancar1").click(function(e) {
	gerarVisual();
     $("#tela1").hide();
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	 $("#home-simulador").fadeIn();
	$("#voltar-button").hide();
    $('#image-header').attr('src', 'img/etapas-2.png');
});

$("#finalizar-estimativa").click(function(e) {
     	$("#tela-final-profissionais").hide();
		$("#tela-final").fadeIn();
		gerarPaginaFinal();
		
	
});


// Função responsável por renderizar a página final
function gerarPaginaFinal(){

$("#td-nome").append($("#nome-do-curso").val());
$("#td-carga").append($("#carga-horaria-do-curso").val());
$("#td-visual").append($("#nome-do-curso").val());
$("#td-textual").append($("#nome-do-curso").val());
$("#td-social").append($("#nome-do-curso").val());
$("#td-tecnica").append($("#nome-do-curso").val());
$("#td-pedagogica").append($("#nome-do-curso").val());
$("#td-acompanhamento").append($("#nome-do-curso").val());
$("#td-recursos").append($("#nome-do-curso").val());
$("#td-custo").append($("#nome-do-curso").val());
$("#td-quantidade").append($("#nome-do-curso").val());
$("#td-imagens-ideal").append($("#nome-do-curso").val());
$("#td-nome-inclusas").append($("#nome-do-curso").val());
$("#td-tempo").append($("#nome-do-curso").val());
$("#td-profissionais").append($("#nome-do-curso").val());
$("#td-profissionais-especialistas").append($("#nome-do-curso").val());
$("#td-profissionais-outros").append($("#nome-do-curso").val());

$("#td-objetivo").append($("#objetivos-do-curso").val());
$("#td-participantes").append($("#participantes-do-curso").val());
$("#td-formacao").append($("#formacao-do-curso").val());
$("#td-inicio").append($("#data-inicio-do-curso").val());
$("#td-fim").append($("#data-fim-do-curso").val());
$("#td-ava").append($("#ava-do-curso").val());
$("#td-formato").append($("#nome-do-curso").val());
$("#td-interacao").append($("#interacao-do-curso").val());
$("#td-descricao").append($("#descricao-do-publico").val());
$("#td-localizacao").append($("#localizacao-do-publico").val());
$("#td-dispPublico").append($("#disponibilidade-do-publico").val());
$("#td-requisito").append($("#requisitos-do-publico").val());
$("#td-experiencia").append($("#experiencia-do-publico").val());
$("#td-disponibilidade").append($("#disponibilidade-do-publico-ead").val());
$("#td-pc-casa").append($("#pc-de-casa").val());
$("#td-pc-trabalho").append($("#pc-trabalho").val());
$("#td-smartphone").append($("#smartphone").val());
$("#td-tablet").append($("#tablet").val());
$("#td-programa").append($("#conteudo-programatico").val());
$("#td-modulos").append($("#nome-do-curso").val());
$("#td-fonte").append($("#modulos-do-curso").val());
$("#td-responsaveis").append($("#fontes-de-curso").val());
$("#td-observacoes").append($("#responsaveis-do-curso").val());
	
}



}









// Função responsável por redenrizar os atributos de todos os objetos do cardápio

	
// Remover itens do carrinho






