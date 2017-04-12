
/*
|--------------------------------------------------------------------------
| Tracking
|--------------------------------------------------------------------------
*/

APP.component.Tracking = {

    init: function () {

        this.trackUrl();  
        this.trackEventos();  
        this.trackAudio();  
    
    },

    // Envia URL para trackear

    trackUrl: function(){

        obj = {
            descricaoNavegacao: window.location.href 
        };


        $.ajax({
            type: "POST",  
            async: false, 
            dataType: 'json',   
            url: tratarUrl("/Registro/Navegacao"), 
            data:  obj
        });

    },   

    // Envia o track de cada evento

    trackEventos: function () {  

        var tipoEvento = $('[data-tipoevento]'); 

        tipoEvento.on('click', function(event) {  

            obj = {
                idConteudo: $('#conteudoID').text(), 
                idTipoEvento: $(this).data("tipoevento")   
            };

            $.ajax({
                type: "POST",  
                async: false, 
                dataType: 'json',   
                url: tratarUrl("/Registro/Evento"),
                data:  obj
            });


        });

    },

   // Envia o track de play de audio

    trackAudio: function(){
        var player = $("#player"); 

        player.on("play", function () { 
         obj = {
            idConteudo: $('#conteudoID').text(), 
            idTipoEvento: $(this).data("tipoevento")   
        };

            $.ajax({
                type: "POST",  
                async: false, 
                dataType: 'json',   
                url: tratarUrl("/Registro/Evento"),
                data:  obj
            });

        });
    }, 





}; 
