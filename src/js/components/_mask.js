
/*
|--------------------------------------------------------------------------
| Máscaras
|--------------------------------------------------------------------------
*/

APP.component.Mascaras = {

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
 
    },

    mascaraCelular: function () {


        $('.input-celular').focusout(function () {

            var elemento, elementoThis; elementoThis = $(this);
            elementoThis.unmask(); elemento = elementoThis.val().replace(/\D/g, "");

            if (elemento.length > 10) {
                elementoThis.mask("(99) 99999-999?9");
            }
            else { 
                elementoThis.mask("(99) 9999-9999?9"); 
             }

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


}; 
