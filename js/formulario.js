(function(){

// PROPIEDADES FORMULARIO
var propFormulario = {

    formulario: document.formulario_contacto,                               /* Esta es una manera diferente de seleccionar un elemento HTML a traves de su "name" porque es un Formulario. Sin la necesidad de seleccionar por clase o ID */
    elementos: document.formulario_contacto.elements,                       /* Con esto, pude acceder a todos los inputs que tiene el formulario. Waooooooo. Elements me mostro los elementos del formulario */
    error: null,
    textoError: null

}



// METODOS FORMULARIO
var metFormulario = {

    inicio: function () {

        for(var i = 0; i < propFormulario.elementos.length; i++) {          /* Type porque es el tipo que le pones en el HTML. NodeName me dice el nombre del Nodo, osea la etiqueta    */

            if ( propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea' ) {

                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);

            }

        }

        propFormulario.formulario.addEventListener('submit', metFormulario.validarInput)                                      /* Se utiliza para los formularios. Cuando el formulario se halla enviado, se activara un evento */

    },


    focusInput: function () {

        this.parentElement.children[1].className = 'label active';                                             /* Con "children" puedo acceder a los elementos hijos */

    },


    blurInput: function () {

        if (this.value == '') {

            this.parentElement.children[1].className = 'label';

        }

    },


    validarInput: function (event) {

        for(var i = 0; i < propFormulario.elementos.length; i++) {

            if (propFormulario.elementos[i].value == '') {                                                /* Con ".value" estas accediendo al valor que tiene. */

                event.preventDefault();                                                                   /* Le estoy diciendo que si los elementos o campos del formulario estan vacios, me detenga el submit, con event.preventDefault */

                if (propFormulario.elementos[i].parentElement.children.length < 3) {

                    propFormulario.error = document.createElement('p');
                    propFormulario.textoError = document.createTextNode('Por favor llena el campo con tu ' + propFormulario.elementos[i].name);
                    propFormulario.error.appendChild(propFormulario.textoError);
                    propFormulario.error.className = 'error';
    
                    propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);

                }



            } else {

                if (propFormulario.elementos[i].parentElement.children.length >= 3) {

                    propFormulario.error =  propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                    propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);

                }

            }

        }

    }

}

metFormulario.inicio();

}())
