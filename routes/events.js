/*
    Rutas de usuairos / Auth
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator")

const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Todas tienen que pasar la validacion de JWT
router.use(validarJWT); //esto valida el JWT, en los routes, siquiero que sea publico lo dejo por encima
//si no lo pongo, no va a funcionar el JWT en los routes


//obtener eventos
router.get(
    '/',
    getEventos
);

//Creat un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

//Actualizar Evento
router.put(
    '/:id',   
     [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización es obligatoria').custom(isDate),
    validarCampos
],
actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;