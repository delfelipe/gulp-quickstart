/*
|--------------------------------------------------------------------------
| Tratar Url
|--------------------------------------------------------------------------
*/


function tratarUrl(url) {
    var ambiente = location.host.indexOf("app.adagency.com.br") != -1 ? "/epson/002_Epson_Stars_2_0" : "";
    var search = location.href.toLowerCase().search(ambiente.toLowerCase());

    return search === -1 ? url : location.href.substr(0, search) + ambiente + url;
}
