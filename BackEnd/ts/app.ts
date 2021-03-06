"use strict";
//import { Usuarios } from "./usuarios";

var express = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var path = require('path');
var cors = require('cors');
var Client = require('pg');
var app = express()
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port: 3306,
  database : 'servel ici-4241'
});

connection.connect(function(err:any) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }))
const configuracion ={
  hostname: "127.0.0.1",
  port: 3000,
}


//Obtener todas las filas
app.get('/getUsuarios',bodyParser.json(), (request:any, response:any) => {
  let clave=request.body.clave;
  console.log(clave)
  connection.query("SELECT * from usuarios", function(error:any, results:any, fields:any){
    response.send(results);
  })
})
app.get('/getPreferencias',bodyParser.json(), (request:any, response:any) => {
  connection.query("SELECT * from preferencias", function(error:any, results:any, fields:any){
    response.send(results);
  })
})
//Obtener los datos de una fila segun el id
app.get('/getUsuario',bodyParser.json(), (request:any, response:any) => {
  //console.log("correo");
  let correo=request.body.correo;
  console.log(correo);
  connection.query("select * from usuarios where correo=?", correo, function(error:any, result:any, fields:any){
    
    response.send(JSON.stringify(result));
  })
})
//Crear una fila
app.post('/crearUsuarios',bodyParser.json(),async (request:any,response:any)=>{
  let nombre=request.body.nombre;
  let correo=request.body.correo;
  let usuario=request.body.usuario;
  let clave=request.body.clave;

  connection.query("insert into usuarios (nombre,correo,usuario,clave) values(?,?,?,?)", [nombre,correo,usuario,clave], function(error:any, result:any, fields:any){
    if (error){
      response.send(JSON.stringify(`F`));
    }else{
      response.status(200).send(result);
    }
    
  })
});

app.post('/crearFormulario',bodyParser.json(),(request:any,response:any)=>{
  console.log("xddddd");
  let nombre=request.body.nombre;
  let correo=request.body.correo;
  let asunto=request.body.asunto;
  let mensaje=request.body.mensaje;
  console.log(nombre,correo,asunto,mensaje);

  connection.query("insert into contacto (nombre,correo,asunto,mensaje) values(?,?,?,?)", [nombre,correo,asunto,mensaje], function(error:any, result:any, fields:any){
    response.send(JSON.stringify(`formulario creado ${result.insertId}`));
  })
});
app.post('/votar',bodyParser.json(),(request:any,response:any)=>{
  console.log("xddddd");
  
  /*let correo=request.body.correo;
  let asunto=request.body.asunto;
  let mensaje=request.body.mensaje;
  console.log(nombre,correo,asunto,mensaje);

  connection.query("insert into contacto (nombre,correo,asunto,mensaje) values(?,?,?,?)", [nombre,correo,asunto,mensaje], function(error:any, result:any, fields:any){
    response.send(JSON.stringify(`formulario creado ${result.insertId}`));
  })*/
});
//Actualizar una fila
/*app.put('/cambiarClave',bodyParser.json(),async (request:any, response:any) => {

  let correo = request.body.correo;
  let claveActualIngresada=request.body.claveActualIngresada;
  let claveIngresada=request.body.claveIngresada;
  let claveEncriptada=request.body.claveEncriptada;
  console.log(correo);
  console.log(claveActualIngresada);
  console.log(claveIngresada);
  console.log(claveEncriptada);
  connection.query("UPDATE `usuarios` SET clave=? WHERE correo=?",[hash,correo],(req1:any,res1:any)=>{
    response.status(200).send("Usuario Actualizado");
  });
});*/

/*app.post('/verificarClave',bodyParser.json() ,(request:any,response:any) => {
  let correo=request.body.correo;
  let clave=request.body.clave;
  console.log(clave+correo);
  connection.query('SELECT * FROM usuarios WHERE correo = ?', correo, async function(error:any, results:any, fields:any) {
    console.log(results[0])
    let claveencrip: any = results[0].clave
    let check = await comparar(clave, claveencrip)
    if(check == true){
      if (error) throw error;
      if (results.length > 0) {
        response.send(JSON.stringify(results));
      } 
    }	else {
      response.send(JSON.stringify(`Usuario y/o Contrase??a Incorrecta`));
    }	 
    response.end();
  });

});*/

app.delete('/borrarUsuario/:correo',bodyParser.json() ,(request:any,response:any)=> {
  let correo=request.params.correo;
  console.log(correo);
  connection.query("DELETE FROM `usuarios` WHERE correo=?",correo,(req1:any,res1:any)=>{
    response.send(JSON.stringify(`Usuario y/o Contrase??a Incorrecta`));
  });
});



app.post('/LoginU', bodyParser.json(), function(request:any, response:any) {
	let rut = request.body.rut;
	let clave = request.body.clave;
	if (rut && clave) {
		connection.query('SELECT * FROM votantes WHERE rut = ?', rut, async function(error:any, results:any, fields:any) {
      if(results[0] != undefined){
        if(clave == results[0].password && true == results[0].enabled){
            if (results.length > 0) {
                response.send(JSON.stringify(results));
            } 
        }else{
          response.send(JSON.stringify(`F`));
          response.end()
        }

      }
      else{
        response.send(JSON.stringify(`F`));
      }
    
        response.end()
    });
	} else {
		response.send(JSON.stringify(`F`));
		response.end();
	}
});

app.listen(configuracion, () => {
  console.log(`Example app listening on port ${configuracion}`)
})