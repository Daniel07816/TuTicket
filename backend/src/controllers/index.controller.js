const jwt = require('jsonwebtoken');
//Bases de datos Posqtgresql
const {Client} = require('pg');

//Conexión a la base de datos
const client = new Client({
    host: "ec2-35-170-202-150.compute-1.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "AdminCM21",
    database: "tuticketbase"
});

client.connect();
//funcion para la ruta signup
const signUp = async (req,res) =>{
    const {nombre, apellido, email, password,region} = req.body;
    const INSERT_infousuario = {
        text: 'INSERT INTO public.data_user_crt(nombre, apellido, correo, contrasena, region)VALUES ($1, $2, $3, $4, $5)', //cambiar path foto por edad
        values: [nombre, apellido, email, password, region]
      }
        await client.query(INSERT_infousuario, (err, resquery)=>{
        if(!err && resquery.rowCount > 0){
            const response = client.query('SELECT id FROM public.data_user_crt ORDER BY id DESC LIMIT 1');
            const token = jwt.sign({id:response.id}, 'secretKey');
            res.status(200).json({
                token
            });
        }
        else{
            return res.status(401).send('Datos erroneos')
        }
    });    
    
    //Query para obtener todos los usuarios creados
    /*
    console.log('entro');
    const response = await client.query('SELECT * FROM public.data_user_crt');
    console.log(response.rows);
    //const { email, password} = req.body;
    res.send("testing signup");
    */
};

const signIn = async (req,res) =>{
    const{email,password} = req.body;
    const SELECTQ = {
        text: 'SELECT id, nombre, apellido, correo, region, path_foto FROM public.data_user_crt WHERE correo = ($1) AND contrasena = ($2)', //Id del ultimo usuario creado
        values: [email, password]
      }
        await client.query(SELECTQ, (err, resquery)=>{
        if(!err && resquery.rowCount > 0){
            const token = jwt.sign({id: resquery.rows[0].id},'secretKey'); //generamos el token del usuario
            return res.status(200).json({
                token
            });
        }
        else{
            return res.status(401).send('Datos erroneos')
        }
    });
}

const principalEventos = async (req,res) =>{
    res.send('Testing eventos')
}

module.exports ={
    signUp,
    signIn,
    principalEventos
}