const express = require('express');
const router = express.Router();

/*Controladores */
const nosotrosController = require('../controllers/nosotrosControllers');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesControllers');
const testimonialesPostController = require('../controllers/testimonialesPostControllers');


module.exports = function(){
    router.get('/', homeController.consultaHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.infoViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesPostController.testimoniales);
    //cuando se llena el formulario
    router.post('/testimoniales', testimonialesPostController.testimonialesPost)
    
    return router;
}