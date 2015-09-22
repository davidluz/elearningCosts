

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
