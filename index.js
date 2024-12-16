const express=require('express');
const app= express();
app.use(express.json());

var lista=[
    {
        id:'1',
        nombre:'Dayana'
    },
    {
        id:'2',
        nombre:'Carolina'
    }
];
//uso de app y web servise en tipo get
app.get('/nombre',(req,res)=>{
    res.json(lista);
});

app.listen(3001,()=>{
    console.log('Esta corriendo en el puerto 3001');
});