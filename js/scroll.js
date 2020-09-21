
// PROPIEDADES SCROLL
var propScroll = {

    posicion: window.pageYOffset,                                        /* Con esto ya tengo acceso a mi posicion, es decir, a donde me encuentro en la pagina */
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    seccion_distancia: null,
    intervalo: null

}



// METODOS SCROLL
var metScroll = {

    inicio: function () {

        for(var i = 0; i < propScroll.scroll_suave.length; i++) {          /* Recuerda que como son arreglos, tienes que recorrerlo con un ciclo */

            propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);

        }

        for(var i = 0; i <propScroll.volver_arriba.length; i++) {

            propScroll.volver_arriba[i].addEventListener('click', metScroll.subir)

        }

    },


    moverse: function (event) {

        event.preventDefault();

        clearInterval(propScroll.intervalo);                                                  /* Con esto detiene el intervalo anterior y se va a la nueva posicion que le indicas */

        propScroll.destino = this.getAttribute('href');
        propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop -94;                /* Esto es para ver la distancia que se tienen las secciones en pixeles */
        
        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function () {

            if (propScroll.posicion < propScroll.seccion_distancia) {

                propScroll.posicion += 30;

                if (propScroll.posicion >= propScroll.seccion_distancia) {

                    clearInterval(propScroll.intervalo);

                }
        
            } else {

                propScroll.posicion -= 30;

                if (propScroll.posicion <= propScroll.seccion_distancia) {

                    clearInterval(propScroll.intervalo);

                }

            }

            window.scroll(0, propScroll.posicion);                                                                             /* Aqui le estas diciendo que te lleve a cierta seccion de la pagina */
        
        }, 15);

    },


    subir: function (event) {

        event.preventDefault();

        clearInterval(propScroll.intervalo);                                        /* Con esto detiene el intervalo anterior y se va a la nueva posicion que le indicas */

        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function () {

            if (propScroll.posicion > 0) {

                propScroll.posicion -= 30;

                if (propScroll.posicion <= 0) {

                    clearInterval(propScroll.intervalo);

                }

            } else {

                return;

            }

            window.scroll(0, propScroll.posicion);

        }, 15); 

    }

}

metScroll.inicio();