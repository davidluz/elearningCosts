var objetos = [];

var valorTotal = 0;

$(document).ready(function() {
		
		
		$(".fancybox").fancybox({	
		   // Se não setar o aoSize o tamanho não funciona
		   autoSize:false,		
			openEffect	: 'elastic',
    	    closeEffect	: 'elastic',
			
			width: '90%',
			height: '90%',
			
			
					
			  helpers:  {
      				  overlay : null					 
    			}				
			});
	
		

			var temp = "<div class='cell' style='width:{width}px; height: {height}px;'></div>";
			var w = 210, h = 210, html = '', limitItem = 23;
			for (var i = 0; i < limitItem; ++i) {
				html += temp.replace(/\{height\}/g, h).replace(/\{width\}/g, w).replace("{index}", i + 1);
			}
			$("#freewall").html(html);
			
			var wall = new freewall("#freewall");
			wall.reset({
				selector: '.cell',
				animate: false,
				cellW: 210,
				cellH: 210,
				delay: 50,
				onResize: function() {
					wall.fitWidth();
				}
			});
			wall.fitWidth();

				     // Carrega as imagens dentro do Grid  e aplica a class do fancybox nas divs            
                 $("#1-2").html('<a class="fancybox" href="#conteudo0"><img src="img/icons/0.png" class="transparente"></a> ');
				 $("#2-2").html('<a class="fancybox" href="#conteudo1"><img src="img/icons/1.png" class="transparente"></a> ');
				 $("#3-2").html('<a class="fancybox" href="#conteudo2"><img src="img/icons/2.png" class="transparente"></a> ');
				 $("#4-2").html('<a class="fancybox" href="#conteudo3"><img src="img/icons/3.png" class="transparente"></a> ');
				 $("#5-2").html('<a class="fancybox" href="#conteudo4"><img src="img/icons/4.png" class="transparente"></a> ');
				 $("#6-2").html('<a class="fancybox" href="#conteudo5"><img src="img/icons/5.png" class="transparente"></a> ');
				 $("#7-2").html('<a class="fancybox" href="#conteudo6"><img src="img/icons/6.png" class="transparente"></a> ');
				 $("#8-2").html('<a class="fancybox" href="#conteudo7"><img src="img/icons/7.png" class="transparente"></a> ');
				 $("#9-2").html('<a class="fancybox" href="#conteudo8"><img src="img/icons/8.png" class="transparente"></a> ');
				 $("#10-2").html('<a class="fancybox" href="#conteudo9"><img src="img/icons/9.png" class="transparente"></a> ');
				 $("#11-2").html('<a class="fancybox" href="#conteudo10"><img src="img/icons/10.png" class="transparente"></a> ');
				 $("#12-2").html('<a class="fancybox" href="#conteudo11"><img src="img/icons/11.png" class="transparente"></a> ');
				 $("#13-2").html('<a class="fancybox" href="#conteudo12"><img src="img/icons/12.png" class="transparente"></a> ');
				 $("#14-2").html('<a class="fancybox" href="#conteudo13"><img src="img/icons/13.png" class="transparente"></a> ');
				 $("#15-2").html('<a class="fancybox" href="#conteudo14"><img src="img/icons/14.png" class="transparente"></a> ');
				 $("#16-2").html('<a class="fancybox" href="#conteudo15"><img src="img/icons/15.png" class="transparente"></a> ');
				 $("#17-2").html('<a class="fancybox" href="#conteudo16"><img src="img/icons/16.png" class="transparente"></a> ');
				 $("#18-2").html('<a class="fancybox" href="#conteudo17"><img src="img/icons/17.png" class="transparente"></a> ');
				 $("#19-2").html('<a class="fancybox" href="#conteudo18"><img src="img/icons/18.png" class="transparente"></a> ');
				 $("#20-2").html('<a class="fancybox" href="#conteudo19"><img src="img/icons/19.png" class="transparente"></a> ');
				 $("#21-2").html('<a class="fancybox" href="#conteudo20"><img src="img/icons/20.png" class="transparente"></a> ');
				 $("#22-2").html('<a class="fancybox" href="#conteudo21"><img src="img/icons/21.png" class="transparente"></a> ');
				 $("#23-2").html('<a class="fancybox" href="#conteudo22"><img src="img/icons/22.png" class="transparente"></a> ');

criaObjetos();
colocaObjetosNoArrayObjetos();
guardaObjetosNoStorage();
recuperaObjetosNoStorage();
calcultaTotalDoCarrinho();
renderizaTabelasDeAtributos();


}); 


/*Fim dos itens que inicializam junto com a página*/





	
		
		
		
            
		   
             
