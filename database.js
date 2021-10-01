const {Client} = require('pg')

const client = new Client({
    host: "ec2-35-170-202-150.compute-1.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "AdminCM21",
    database: "tuticketbase"

})

client.connect();
/*Información de usuario luego de crear cuenta. SELECT
var correo = 'cmalvarado@ufm.edu' // el correo debe ser único en la base de datos. limpiar espacios y todo minúscula. 
const SELECTQ = {
    text: 'SELECT id, nombre, apellido, correo, region, path_foto FROM public.data_user_crt WHERE correo = ($1)',
    values: [correo]
  }
client.query(SELECTQ, (err, res)=>{
    if(!err){
        //console.log(typeof(res))
        //console.log(res)
        info = res.rows
        //console.log(res.rows);
        for (const index in info) {  
            user = info[index]
            for (const key in user) {  
                console.log(`${key}: ${user[key]}`)
              }
        }
        
    }
    else{
        console.log(err.message)
    }
    client.end;
});
*/
/*Información de usuario luego de crear cuenta. INSERT
var nombre = 'Mario'
var apellido = 'Pisquiy'
var correo = 'mariopisquiy@ufm.edu'
var pass = 'tuPas234'
var region = 'CentroAmerica'
foto = 'IMG_3973.PNG'
var foto_path = 'fotos_usuarios/' + foto
// opcion 2
// var foto_path = 'https://github.com/Daniel07816/TuTicket/blob/60b5ee85dccd7a5467ccf03940ed952bcb27a1b5/fotos_usuarios/IMG_3973.PNG'
const INSERT_infousuario = {
    text: 'INSERT INTO public.data_user_crt(nombre, apellido, correo, contrasena, region, path_foto)VALUES ($1, $2, $3, $4, $5, $6)',
    values: [nombre, apellido, correo, pass, region, foto_path]
  }
client.query(INSERT_infousuario, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});*/
// Información de evendo luego de crear un evento INSERT
var nombre = 'Mana Concierto'
var descripcion = 'Concierto de Mana por la gira del mundo en Guatemala'
var fecha = '12/09/2023'
var hora = '18:30'
var fecha_limite = '5/09/2023'
const INSERT_infoevento = {
    text: 'INSERT INTO public.data_evento(nombre, descripcion, fecha, hora, fecha_limite)VALUES ($1, $2, $3, $4, $5)',
    values: [nombre, descripcion, fecha, hora, fecha_limite]
  }
client.query(INSERT_infoevento, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});
var id_usuario = 1
/* aqui query para traer el id, del evento creado. Donde el where es toda la info obtenida. 
const SELECTQ = {
    text: 'SELECT id FROM public.data_evento WHERE todo = (todo)', o agarrar el último creado. 
    values: [correo]
  }
*/
var id_evento = 1
const INSERT_eventoscreados = {
    text: 'INSERT INTO public.eventos_creados(id_user_crt, id_evento)VALUES ($1, $2)',
    values: [id_usuario, id_evento]
  }
client.query(INSERT_eventoscreados, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});
// iria la query de las fotos


