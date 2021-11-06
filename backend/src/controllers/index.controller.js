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

const crearEvento = async (req,res) =>{
    const {idUsuario,nombre,descripcion,categoria,fecha,precio,ubicacion,boletosmax,fechamax} = req.body;
    const idUsuarioD = jwt.verify(idUsuario,'secretKey').id;
    console.log(idUsuarioD)
    console.log(nombre)
    console.log(descripcion)
    console.log(categoria)
    console.log(fecha)
    console.log(precio)
    console.log(ubicacion)
    console.log(boletosmax)
    console.log(fechamax)
    var fecha1 = fecha.split("T");  

    console.log(fecha1[0]) //fecha de creación del evento 
    console.log(fecha1[1]) //Hora del evento creado

    var fecha2 = fechamax.split("T"); 
    console.log(fecha2[0]) // fecha limite del evento 
    console.log(fecha2[1])


    //var nombre = nombre
    //var descripcion = descripcion
    //var fecha = fecha1[0]
    //var hora = fecha1[1]
    //var fecha_limite = fecha2[0]
    
    const INSERT_infoevento = {
        text: 'INSERT INTO public.data_evento(nombre, descripcion, fecha, hora, fecha_limite)VALUES ($1, $2, $3, $4, $5)',
        values: [nombre, descripcion, fecha1[0], fecha1[1], fecha2[0]]
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

    var id_evento;
    var id_usuario = 44; 

    // aqui query para traer el id, del evento creado.  
    const SELECT_ID_EVENTO_creado = {
        text: 'SELECT id FROM public.data_evento ORDER BY id DESC LIMIT 1',
        values: []
    }
    client.query(SELECT_ID_EVENTO_creado, (err, res)=>{
        if(!err){
            info = res.rows
            //console.log(res.rows);
            for (const index in info) {  
                user = info[index]
                for (const key in user) {  
                    id_evento = user[key]
                }
            }
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
            var categorias = [1];
            for (const index in categorias){
                const INSERT_categoria_evento = {
                    text: 'INSERT INTO public.categoria_evento(id_evento, id_categoria)VALUES ($1, $2)',
                    values: [id_evento, categorias[index]]
                }   
                client.query(INSERT_categoria_evento, (err, res)=>{
                    if(!err){
                        console.log(res.rows);
                    }
                    else{
                        console.log(err.message)
                    }
                    client.end;
                });
            }
            for (const index in localidades){
                const INSERT_categoria_evento = {
                    text: 'INSERT INTO public.info_ubi_local_eventos(id_evento, id_localidad, id_ubicacion, total, precio) VALUES ($1, $2, $3, $4, $5, $6);',
                    values: [id_evento, localidades[index], ubicaciones[index], total, precio]
                }   
                client.query(INSERT_categoria_evento, (err, res)=>{
                    if(!err){
                        console.log(res.rows);
                    }
                    else{
                        console.log(err.message)
                    }
                    client.end;
                });
            }
        }
        else{
            console.log(err.message)
        }
        client.end;
    });
    res.send('Testing eventos')
    
}

module.exports ={
    signUp,
    signIn,
    principalEventos,
    crearEvento
}