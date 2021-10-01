const {Client} = require('pg')

const client = new Client({
    host: "ec2-35-170-202-150.compute-1.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "AdminCM21",
    database: "tuticketbase"

})

client.connect();
/*
//Información de usuario luego de crear cuenta. SELECT
var correo = 'cmalvarado@ufm.edu' // el correo debe ser único en la base de datos. limpiar espacios y todo minúscula. 
const SELECTQ = {
    text: 'SELECT nombre, apellido, correo, region, path_foto FROM public.data_user_crt WHERE correo = ($1)',
    values: [correo]
  }
client.query(SELECTQ, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});*/
//Información de usuario luego de crear cuenta. INSERT
var nombre = 'Carlos'
var apellido = 'Alvarado'
var correo = 'cmalvarado@ufm.edu'
var pass = 'tutickertPas234'
var region = 'CentroAmerica'
var foto = ''
const INSERTQ = {
    text: 'INSERT INTO public.users_data(nombre, apellido, correo, contrasena, edad, region)VALUES ($1, $2, $3, $4, $5, $6)',
    values: [nombre, apellido, correo, pass, edad, region]
  }
client.query(INSERTQ, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});