const Testimonial = require('../models/Testimoniales');

exports.testimonialesPost =  async(req, res) => {
    let {nombre, correo, mensaje} = req.body

    let errores = [];
    if(!nombre){
        errores.push({'mensaje': 'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje': 'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje': 'Agrega tu mensaje'})
    }

    //revisar por errores
    if(errores.length > 0){
        //muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    }else{
        //almacenar en la base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimoniales => res.redirect('/testimoniales'))
        .catch(error => console.log(error))    
    }
}

exports.testimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
         res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
}

exports.infoViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
         res.render('viajes', {
         pagina: 'Proximos Viajes',
         viajes
         });
}
