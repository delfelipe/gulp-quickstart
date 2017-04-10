
/*
|--------------------------------------------------------------------------
| Modal
|--------------------------------------------------------------------------
*/

var modal = {

    init: function () {
        this.fecharModal();
    },


    fecharModal: function () {

        $('.modal-close').on('click', function () {
            $('.alert-box').hide();
            $('.modal').hide();
        })

    }
}
