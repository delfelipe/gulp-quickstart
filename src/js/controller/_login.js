/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

APP.controller.Login = {

    init: function () {

        this.abrirLogin();
        this.validarLogin();

    }, 

     setup : function () {

        this.minhaConta = $('#minha-conta');

    },
    
    // Abrir Caixa de Login

    abrirLogin: function () {

        $('#minha-conta').on('click', function () {
            $('.area-login').fadeToggle();

            return false;
        });
    },

    // Validar e Logar

    validarLogin: function () {

        $('#formulario-login').validate({

            rules: {
                'login': {
                    required: true
                },
                'password': {
                    required: true
                }

            },

            messages: {
                'login': {
                    required: "Campo obrigatório"
                },
                'password': {
                    required: "Campo obrigatório"
                }

            },

            submitHandler: function (form) {

                $.ajax({
                    type: "POST",
                    async: false,
                    dataType: 'json',
                    url: tratarUrl("/Controller/Metodo"),
                    data:  $('#formulario').serialize(),

                    beforeSend: function () {

                    },
                    success: function (data) {

                     if (data.StatusCode === 200) {

                        location.href = tratarUrl("/Home/Index");       

                    } else {

                        modal.abrirModal('Ops!', data.Erro);

                    }

                    
                }
            });
            }

        });

    }



};






