
/*
|--------------------------------------------------------------------------
| Modal
|--------------------------------------------------------------------------
*/

APP.component.Modal = {

    init: function () {
        this.fecharModal();
        // this.abrirModal();
    },


    fecharModal: function () {

        $('.modal-close').on('click', function () {
            $('.modal-box').hide();
            $('.modal').hide();
        });

    },

    abrirModal: function(titulo, texto) {
    
    	$('.modal').fadeIn();
    	$('.modal-box').fadeIn();
    	$('.modal-title').text(titulo);
    	$('.modal-text').text(texto); 
    	
    }


};

