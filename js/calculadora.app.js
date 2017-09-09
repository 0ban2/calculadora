window.onload = function () {
    var teclado = document.getElementsByTagName('h2'),
            respuesta = document.querySelectorAll('.respuesta h3')[0],
            limpiar = document.getElementsByClassName('limpiar')[0];

    for (var i = 0; i < teclado.length; i++) {
        if (teclado[i].innerHTML === '=') {
            teclado[i].addEventListener("click", calculate(i));
        } else {
            teclado[i].addEventListener("click", addValue(i));
        }
    }

    limpiar.onclick = function () {
        respuesta.innerHTML = '';
    };

    function addValue(i) {
        return function () {

            respuesta.innerHTML += teclado[i].innerHTML;

        };
    }

    function calculate(i) {
        return function () {
            var total = respuesta.innerHTML;
            respuesta.innerHTML = eval(total);
        };
    }
};