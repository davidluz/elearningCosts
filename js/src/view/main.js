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
                     $("#1-2").html('<a class="fancybox" href="#conteudo1"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#2-2").html('<a class="fancybox fancybox.iframe" href="conteudos/1.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#3-2").html('<a class="fancybox fancybox.iframe" href="conteudos/1.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#4-2").html('<a class="fancybox fancybox.iframe" href="conteudos/4.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#5-2").html('<a class="fancybox fancybox.iframe" href="conteudos/5.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#6-2").html('<a class="fancybox fancybox.iframe" href="conteudos/6.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#7-2").html('<a class="fancybox fancybox.iframe" href="conteudos/7.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#8-2").html('<a class="fancybox fancybox.iframe" href="conteudos/8.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#9-2").html('<a class="fancybox fancybox.iframe" href="conteudos/9.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#10-2").html('<a class="fancybox fancybox.iframe" href="conteudos/10.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#11-2").html('<a class="fancybox fancybox.iframe" href="conteudos/11.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#12-2").html('<a class="fancybox fancybox.iframe" href="conteudos/12.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#13-2").html('<a class="fancybox fancybox.iframe" href="conteudos/13.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#14-2").html('<a class="fancybox fancybox.iframe" href="conteudos/14.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#15-2").html('<a class="fancybox fancybox.iframe" href="conteudos/15.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#16-2").html('<a class="fancybox fancybox.iframe" href="conteudos/16.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#17-2").html('<a class="fancybox fancybox.iframe" href="conteudos/17.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#18-2").html('<a class="fancybox fancybox.iframe" href="conteudos/18.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#19-2").html('<a class="fancybox fancybox.iframe" href="conteudos/19.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#20-2").html('<a class="fancybox fancybox.iframe" href="conteudos/20.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#21-2").html('<a class="fancybox fancybox.iframe" href="conteudos/21.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#22-2").html('<a class="fancybox fancybox.iframe" href="conteudos/22.html"><img src="img/icons/0.png" class="transparente"></a> ');
					 $("#23-2").html('<a class="fancybox fancybox.iframe" href="conteudos/23.html"><img src="img/icons/0.png" class="transparente"></a> ');


colocaObjetosNoArrayObjetos();
guardaObjetosNoStorage();
recuperaObjetosNoStorage();
calcultaTotalDoCarrinho();



}); 


/*Fim dos itens que inicializam junto com a página*/





	
		
		
		
            
		   
             
