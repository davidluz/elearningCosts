var objetos = [];
var valorTotal = 0;

$(document).ready(function() {
		
		
		$(".fancybox").fancybox({			
			openEffect	: 'elastic',
    	    closeEffect	: 'elastic',
			
			  helpers:  {
      				  overlay : null					 
    			}				
			});
	
		

			var temp = "<div class='cell' style='width:{width}px; height: {height}px;'></div>";
			var w = 200, h = 200, html = '', limitItem = 23;
			for (var i = 0; i < limitItem; ++i) {
				html += temp.replace(/\{height\}/g, h).replace(/\{width\}/g, w).replace("{index}", i + 1);
			}
			$("#freewall").html(html);
			
			var wall = new freewall("#freewall");
			wall.reset({
				selector: '.cell',
				animate: false,
				cellW: 200,
				cellH: 200,
				delay: 50,
				onResize: function() {
					wall.fitWidth();
				}
			});
			wall.fitWidth();

				     // Carrega as imagens dentro do Grid  e aplica a class do fancybox nas divs            
                     $("#1-2").html('<a class="fancybox fancybox.iframe" href="conteudos/1.html" ><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#2-2").html('<a class="fancybox fancybox.iframe" href="conteudos/2.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#3-2").html('<a class="fancybox fancybox.iframe" href="conteudos/3.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#4-2").html('<a class="fancybox fancybox.iframe" href="conteudos/4.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#5-2").html('<a class="fancybox fancybox.iframe" href="conteudos/5.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#6-2").html('<a class="fancybox fancybox.iframe" href="conteudos/6.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#7-2").html('<a class="fancybox fancybox.iframe" href="conteudos/7.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#8-2").html('<a class="fancybox fancybox.iframe" href="conteudos/8.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#9-2").html('<a class="fancybox fancybox.iframe" href="conteudos/9.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#10-2").html('<a class="fancybox fancybox.iframe" href="conteudos/10.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#11-2").html('<a class="fancybox fancybox.iframe" href="conteudos/11.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#12-2").html('<a class="fancybox fancybox.iframe" href="conteudos/12.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#13-2").html('<a class="fancybox fancybox.iframe" href="conteudos/13.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#14-2").html('<a class="fancybox fancybox.iframe" href="conteudos/14.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#15-2").html('<a class="fancybox fancybox.iframe" href="conteudos/15.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#16-2").html('<a class="fancybox fancybox.iframe" href="conteudos/16.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#17-2").html('<a class="fancybox fancybox.iframe" href="conteudos/17.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#18-2").html('<a class="fancybox fancybox.iframe" href="conteudos/18.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#19-2").html('<a class="fancybox fancybox.iframe" href="conteudos/19.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#20-2").html('<a class="fancybox fancybox.iframe" href="conteudos/20.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#21-2").html('<a class="fancybox fancybox.iframe" href="conteudos/21.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#22-2").html('<a class="fancybox fancybox.iframe" href="conteudos/22.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');
					 $("#23-2").html('<a class="fancybox fancybox.iframe" href="conteudos/23.html"><img src="img/icons/ico1.svg" class="transparente"></a> <span class="ico-title"><center>Página estática</center></span>');


colocaObjetosNoArrayObjetos();
guardaObjetosNoStorage();
recuperaObjetosNoStorage();
calcultaTotalDoCarrinho();
console.log(valorTotal);

}); 

/*Fim dos itens que inicializam junto com a página*/





	
		
		
		
            
		   
             
