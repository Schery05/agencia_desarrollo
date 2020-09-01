const Viaje = require('../models/Viajes');

exports.infoViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
         res.render('viajes', {
         pagina: 'Proximos Viajes',
         viajes
         });
}

//SIEMRPE SE RECOMIENDO QUE SE USE ASYNC AWAIT, PORQUE HASTA QUE NO SE EJECUTE 
//UNA PARTE IMPORTANTE DEL CODIGO NO PASA A LA OTRA PARTE
 exports.mostrarViaje = async(req, res) => {
     // res.send(req.params.id)
       const viaje = await Viaje.findByPk(req.params.id)
       res.render('viaje', {
            viaje
    });
}