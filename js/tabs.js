(function(){

// PROPIEDADES TABS
var propTabs = {

    primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
    primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),                                /* Esto arroja un array porque estoy usando un selector multiple */
    li_encabezado: document.querySelectorAll('#encabezado_menu li'),
    divs_contenido: document.querySelectorAll('#contenido_menu > div'),                                      /* Esta accediendo a los hijos directos */
    contenido_activo: null

}



// METODOS TABS
var metTabs = {

    inicio: function () {

        propTabs.primer_encabezado.className = 'active';
        propTabs.primer_contenido.className = 'active';

        for(var i = 0; i < propTabs.enlaces_encabezado.length; i++) {

            propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento)                    /* Lo que quiero que suceda es que le coloque la clase active al que yo le de clic, y al otro se la quite. Y si le doy al otro, que le quite al otro. */

        }
    },


    evento: function (event) {                                                          /* Nuevo parametro que se le puede añadir a las funciones cuando estas son ejecutadas por un evento. En este caso esta es una funcion que fue ejecutada por un evento Click. Dentro del parametro puedes agregar cualquier cosa. Ejm: hola, lo que sea, event, etc. Y este parametro se va a referir directamente al evento. Es decir, se crea un objeto de forma automatica refiriendose al evento */

        event.preventDefault();                                                         /* Detiene la accion por defecto. Lo que hace este metodo "preventDefault" es prevenir lo que suceda por defecto en ese evento. Cancelara la funcion que realizara ese evento. Detiene la accion por defecto, que no haga la accion que tenia que hacer por defecto la funcion o evento. */

        for(var i = 0; i < propTabs.li_encabezado.length; i++) {

            propTabs.li_encabezado[i].className = '';

        }

        for(var i = 0; i < propTabs.divs_contenido.length; i++) {

            propTabs.divs_contenido[i].className = '';

        }

        this.parentElement.className = 'active';                                        /* Al elemento que le de click (this), quiero que accedas a su elemento Padre (li), y accedas a su className y le pongas la clase "active", solo al que le de click. */
        propTabs.contenido_activo = this.getAttribute('href');                          /* getAttribute me permite tener el valor de un atributo que yo le coloque. EJM: href */
        document.querySelector(propTabs.contenido_activo).className = 'active';
        document.querySelector(propTabs.contenido_activo).style.opacity = '0';
        
        setTimeout(function() {
            
            document.querySelector(propTabs.contenido_activo).style.opacity = '1';

        }, 100)
    }

}

metTabs.inicio();

}())
