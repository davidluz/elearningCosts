$(document).ready(function() {
	
$("#botaoAdicionar0").click(function() {
	

 
	adicionarObjetoAoCarrinhoAtual(0,parseInt($("#quantidade0").val()));   


});	
	

    
});


var carrinhoAtual = {};
carrinhoAtual.valorTotal = 0;

//Função atualiza valores do Objeto
function adicionarObjetoAoCarrinhoAtual(objetoID, quantidade){
	
	var objetoID = objetoID;
	var quantidade = quantidade;
    
	objetos[objetoID].quantidade = objetos[objetoID].quantidade + quantidade;
	
	console.log(objetos[0].quantidade);
		
	
	
}
	
   
