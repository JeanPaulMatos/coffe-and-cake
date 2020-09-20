(function(){

// PROPIEDADES SLIDER
var propSlider = {

    slider: document.getElementById('slider'),
    primerSlide: null

}



// METODOS SLIDER
var metSlider = {

    inicio: function () {

        setInterval(metSlider.moverSlide, 3000);

    },

    moverSlide: function () {

        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-100%';

        setTimeout(function () {

            propSlider.primerSlide = propSlider.slider.firstElementChild                        /* Esta propiedad siempre me va a devolver el primer elemento hijo */

            propSlider.slider.appendChild(propSlider.primerSlide);

            propSlider.slider.style.transition = 'unset';                                       /* Primero le tienes que quitar el transition */
            propSlider.slider.style.marginLeft = '0';

        }, 1000);

    }

}

metSlider.inicio();

}())