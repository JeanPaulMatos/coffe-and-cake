
(function(){                                                        /* Lo que hicimos aqui es proteger nuestro codigo. Dentro de las llaves va tu codigo JS, con esto proteges tu codigo, las variables, objetos y propiedades para que otro script no lo afecte y no genere conflicto. Ya que recuerda no se puede acceder a una variable dentro de una funcion desde afuera. Eso es Scope */


// OBJETO CON LAS PROPIEDADES DEL EFECTO LIGHTBOX
var propLightbox = {

    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,                                                        /* No quiero que tenga ningun valor pero igual que exista para que almacene la imagen al que le dio click*/
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    cerrar_modal: null,
    animacion: 'fade'

}


// OBJETO CON LOS METODOS DEL EFECTO LIGHTBOX
var metLightbox = {

    inicio: function () {

        for(var i = 0; i < propLightbox.imgContainer.length; i++) {

            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);

        }

    },


    capturaImagen: function () {

        propLightbox.imagen = this;

        metLightbox.lightbox(propLightbox.imagen);

    },


    lightbox: function (imagen) {

        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);            /* Esta propiedad te muestra los estilos Css, el primer parametro es de quien quieres obtener los estilos, el segundo es un Pseudoelemento. Te mostrara todos los estilos, es ahi donde tienes que indicarle de quien unicamente quieres que te muestre. Slice lo que hace es cortar una parte del string. Este es un nuevo metodo de JS que nos permite cortar partes de un string, del principio y del final */          /* .Style sirve para yo poder asignar estilos */
        
        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');

        propLightbox.lightbox_container = document.getElementById('lightbox_container');

        propLightbox.lightbox_container.style.width = '100%';
        propLightbox.lightbox_container.style.height = '100%';
        propLightbox.lightbox_container.style.position = 'fixed';
        propLightbox.lightbox_container.style.zIndex = '1000';
        propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.lightbox_container.style.top = '0';                                    /* Con esto le digo que ocupe toda la pantalla */
        propLightbox.lightbox_container.style.left = '0';

        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightbox.modal = document.getElementById('modal');

        propLightbox.modal.style.height = '100%';

        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');                   /* En lugar de poner un "document.getelementsbytagname", puse la etiqueta div por asi decirlo, sin la necesidad de acceder a "document." */

        if (propLightbox.animacion == 'fade') {

            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;

            setTimeout(function () {

                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1

            }, 50);                                                                                             /* Para generar un retraso (funcion y el tiempo en milisegundos) */

        }

        propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fas fa-times"></i>';                           /* Lo que hice fue agregarle ese icono con el "+=" si hubiera sido solo igual, lo hubiera reemplazado */
        
        propLightbox.cerrar_modal = document.getElementById('cerrar_modal');
        propLightbox.cerrar_modal.addEventListener('click', metLightbox.cerrarModal);                                           /* Esto es un metodo que esta dentro de metLightbox. Es por eso que primero ponemos "metlightbox.cerrarmodal" */

    },


    cerrarModal: function () {

        propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);

    }

}

metLightbox.inicio();


}())

