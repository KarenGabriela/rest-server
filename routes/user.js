const {Router} = require ('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPatch, 
        usuariosPut, 
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

  //endpoint
  router.get('/', usuariosGet);

  router.put('/:iduser', usuariosPut);

  router.post('/', usuariosPost);

  router.delete('/', usuariosDelete);

  router.patch('/', usuariosPatch);

module.exports = router;