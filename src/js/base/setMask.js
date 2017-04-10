
/*
|--------------------------------------------------------------------------
| Máscaras
|--------------------------------------------------------------------------
*/

var mascarasFormulario = {

    init: function () {

        this.mascara();
        this.mascaraCelular();

    },


    mascara: function () {

        $('.input-cpf').mask('999.999.999-99');
        $('.input-telefone').mask('(99) 9999-9999');
        $('.input-cep').mask('99999-999');
        $('.input-data').mask('99/99/9999');
        $('.input-cnpj').mask('99.999.999/9999-99');

        $('.input-celular').focusout(function () {
            var e, t; t = $(this);
            t.unmask(); e = t.val().replace(/\D/g, "");
            if (e.length > 10) {
                t.mask("(99) 99999-999?9")
            }
            else { t.mask("(99) 9999-9999?9") }
        }).trigger("focusout");

        

    },

    mascaraCelular: function () {


        $('.input-celular').focusout(function () {
            var e, t; t = $(this);
            t.unmask(); e = t.val().replace(/\D/g, "");
            if (e.length > 10) {
                t.mask("(99) 99999-999?9")
            }
            else { t.mask("(99) 9999-9999?9") }
        }).trigger("focusout");


    },

     mascaraDinheiro: function () {


         $(".input-money").maskMoney({
                prefix:'R$ ', allowNegative: true,
                thousands:'.',
                decimal:',',
                affixesStay: false
        });


    }


}
