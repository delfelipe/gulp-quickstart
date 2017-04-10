/*
|--------------------------------------------------------------------------
| Cadastro / Atualizar Cadastro
|--------------------------------------------------------------------------
*/


var formularioCadastro = {

    init: function () {

        this.cadastrar()

    },

    // Valida e Cadastra

    cadastrar: function () {

        $('#formulario-cadastro').validate({

            ignore: ":not(:visible)",

            rules: {
                'Nome': {
                    required: true
                },
                'SobreNome': {
                    required: true
                },
                'Sexo': {
                    required: true
                },
                'Celular': {
                    required: true
                },
                'Email': {
                    required: true,
                    email: true
                },
                'CONFIRMAR_EMAIL': {
                    required: true,
                    email: true,
                    equalTo: "#Email"
                },
                'CPF': {
                    required: true,
                    cpf: true
                },
                'DataNascimento': {
                    required: true,
                    dateBR: true
                },
                'CEP': {
                    required: true
                },
                'Endereco': {
                    required: true
                },
                'Numero': {
                    required: true
                },
                'Bairro': {
                    required: true
                },
                'Cidade': {
                    required: true
                },
                'UF': {
                    required: true
                },

            },

            messages: {
                'Nome': {
                    required: "Campo obrigatório"
                },
                'SobreNome': {
                    required: "Campo obrigatório"
                },
                'Sexo': {
                    required: "Campo obrigatório"
                },
                'Celular': {
                    required: "Campo obrigatório"
                },
                'Email': {
                    required: "Campo obrigatório",
                    email: "Digite um email válido"
                },
                'CONFIRMAR_EMAIL': {
                    required: "Campo obrigatório",
                    equalTo: "Digite o mesmo Email",
                    email: "Digite um email válido"
                },
                'CPF': {
                    required: "Campo obrigatório"
                },
                'DataNascimento': {
                    required: "Campo obrigatório"
                },
                'CEP': {
                    required: "Campo obrigatório"
                },
                'Endereco': {
                    required: "Campo obrigatório"
                },
                'Numero': {
                    required: "Campo obrigatório"
                },
                'Bairro': {
                    required: "Campo obrigatório"
                },
                'Cidade': {
                    required: "Campo obrigatório"
                },
                'UF': {
                    required: "Campo obrigatório"
                }
            },

            submitHandler: function (form) {

                $.post(tratarUrl("/Cliente/Cadastro"), $('#formulario-cadastro').serialize(), function (data) {

                    if (data.StatusCode === 200) {

                        location.href = tratarUrl("/Cliente/Sucesso");

                    } else {
                        $(".error-tip").text(data.Erro).fadeIn();
                    }
                    
                });

            }

        });

    }


}

