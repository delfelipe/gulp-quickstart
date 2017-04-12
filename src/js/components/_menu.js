/*
|--------------------------------------------------------------------------
| Menu
|--------------------------------------------------------------------------
*/

APP.component.Menu = {

    init : function () {
        this.setup();
        this.abrirMenu();
    },

    setup : function () {

        this.buttonMenu = $('.abrir-menu');

    },


    abrirMenu: function () {

        this.buttonMenu.on('click', function () {

            $('.menu').fadeToggle();

        });

    },

   


};


