import express  from 'express'
import './config.js'

const app= express()

app.get('/empleados',(req,res)=> res.send('obteniendo empleados'))
app.post('/empleados',(req,res)=> res.send('creando empleados'))
app.put('/empleados',(req,res)=> res.send('actualizando empleados'))
app.delete('/empleados',(req,res)=> res.send('eliminando empleados'))

app.listen(process.env.PORT)

console.log('server en puerto '+ process.env.PORT)

