/*
|--------------------------------------------------------------------------
| Utils
|--------------------------------------------------------------------------
*/

APP.component.Utils = {

    init : function () {
        this.setup();
        this.tratarUrl();
        this.getController();
    },

    setup : function () {

        


    },

    tratarUrl: function(url){

        var ambiente = urlBase.substring(0, urlBase.length - 1);

            var ret = ambiente + url;
            return ret;
    },

    getController: function () {

        var controller = $('meta[name=controller]').attr('content');
        return controller ? controller : false;

    },

   


};


