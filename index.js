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
    },
    {
         id:'3',
        nombre:'Abigail'
    },
];
//uso de app y web servise en tipo get
app.get('/nombres',(req,res)=>{
    res.json(lista);
});

app.get('/dayana',(req,res)=>{
    res.send('Hola mi nombre es Dayana Haro tengo 21 años, me gusta leer');
});

app.get('/suma',(req,res)=>{
    let n1=2;
    let n2=8;
    let suma=n1+n2;
    res.send(suma+'');

});

app.get('/sumas/:num1',(req,res)=>{
    let num1= parseInt(req.params.num1);
    let num2=8;
    let suma=num1+num2;
    res.send('la suma es:'+ suma);

});


app.listen(3001,()=>{
    console.log('Esta corriendo en el puerto 3001');
});