const {response, request} = require('express');

const usuariosGet = (req=request, res= response) => {

    const {nombre='no name', apikey} = req.query;

    res.json({
        msg: 'get api - CONTROLADOR',
        nombre,
        apikey
    });
  }

  const usuariosPost =  (req, res= response) => {

    const {nombre} = req.body;

    res.json({
        msg: 'post api - CONTROLADOR',
        nombre
    })
  }

  const usuariosPut =  (req, res= response) => {

    const id= req.params.iduser;
    res.json({
        msg: 'put api - CONTROLADOR',
        id
    })
  }

  const usuariosPatch =  (req, res= response) => {
    res.json({
        msg: 'patch api - CONTROLADOR'
    })
  }

  const usuariosDelete =  (req, res= response) => {
    res.json({
        msg: 'delete api - CONTROLADOR'
    })
  }


  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
}

