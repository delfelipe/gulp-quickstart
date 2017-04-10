/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

var formularioLogin = {

    init: function () {

        this.abrirLogin();
        this.validarLogin();

    }, 
 
    // Abrir Caixa de Login

    abrirLogin: function () {

        $('#minha-conta').on('click', function () {
            $('.area-login').fadeToggle();

            return false;
        })
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

                $.post(tratarUrl("/Usuario/Login"), {

                     login: $("#login-user").val(),
                     senha: $("#login-password").val()

                  }, function (data) {

                    if (data.StatusCode === 200) {

                        location.href = tratarUrl("/Home/Index");

                    } else {

                        $(".error-tip").text(data.Erro);
                        $(".error-tip").fadeIn();
                        
                    }
                });

            }

        });

    }



}

