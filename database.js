const {Client} = require('pg')

const client = new Client({
    host: "ec2-35-170-202-150.compute-1.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "AdminCM21",
    database: "postgres"

})

client.connect();
//Información de usuario luego de crear cuenta. SELECT
var nombre = 'Carlos'
const SELECTQ = {
    text: 'SELECT nombre, apellido, correo, edad, region FROM public.users_data WHERE nombre = ($1)',
    values: [nombre]
  }
client.query(SELECTQ, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});
//Información de usuario luego de crear cuenta. INSERT
var nombre = 'Mario'
var apellido = 'Pisquiy'
var correo = 'mariopisquiy@ufm.edu'
var pass = 'tutickertPas234'
var edad = 19;
var region = 'CentroAmerica'
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