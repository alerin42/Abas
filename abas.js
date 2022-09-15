
type="text/javascript"
src="http://code.jquery.com/jquery-1.7.2.min.js">
	
    $(document).ready(function(){
        $("#content div:nth-child(1)").show();
        $(".abas li:first div").addClass("selected");
        $(".aba").click(function(){
            $(".aba").removeClass("selected");
            $(this).addClass("selected");
            var indice = $(this).parent().index();
            indice++;
            $("#content").hide();
            $("#content div:nth-child("+indice+")").show();
        })

        $(".aba").hover(
            function(){$(this).addClass("ativa")},
            function(){$(this).removeClass("ativa")}
        )

    })
    function myFunction() {
        document.getElementById("gerarTxt").innerHTML = "TXT";
    }