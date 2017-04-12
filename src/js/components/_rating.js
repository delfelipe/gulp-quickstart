/*
|--------------------------------------------------------------------------
| Notas / Avaliação
|--------------------------------------------------------------------------
*/

APP.component.Rating = {

    init: function () {

        this.nota();

    },

    enviarNota: function () {

        $("#rateYo").rateYo({
            starWidth: "20px",
            fullStar: true,
            rating: $('#nota-usuario').text(),
            onSet: function (rating) {

                obj = {
                    idConteudo: $('#conteudoID').text(),
                    nota: rating
                };

                $.ajax({
                    type: "POST",
                    async: false,
                    dataType: 'json',
                    url: tratarUrl("/Avaliacao/Avaliar"),
                    data: obj,
                });
            }
        });

    },

};