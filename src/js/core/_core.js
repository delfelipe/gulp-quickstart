/*
|--------------------------------------------------------------------------
| Core
|--------------------------------------------------------------------------
*/

APP.core.Main = {

    init: function() {
        this.loadPageController();
        APP.controller.General.init(); 
    },

    loadPageController: function () {
        var ctrl = APP.component.Util.getController();

        if (ctrl) {
            APP.controller[ctrl].init();
        }

    }
};

/*
|--------------------------------------------------------------------------
| Chamada
|--------------------------------------------------------------------------
*/


$(document).ready(function () {

    APP.core.Main.init();

});