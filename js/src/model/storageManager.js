

function colocaObjetosNoArrayObjetos(){
objetos.push(objeto0);
objetos.push(objeto1);
objetos.push(objeto2);
objetos.push(objeto3);
objetos.push(objeto4);
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
