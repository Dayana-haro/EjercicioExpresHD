const express = require('express');
const app = express();
app.use(express.json());

//lista de nombre
var lista = [
    {
        id: '1',
        nombre: 'Dayana'
    },
    {
        id: '2',
        nombre: 'Carolina'
    },
    {
        id: '3',
        nombre: 'Abigail'
    },
];

// Ruta para obtener la lista de nombres
app.get('/nombres', (req, res) => {
    res.json(lista);
});

// Ruta para saludo personalizado
app.get('/dayana', (req, res) => {
    res.send('Hola mi nombre es Dayana Haro tengo 21 años, me gusta leer');
});

// Ruta para realizar una suma simple
app.get('/suma', (req, res) => {
    let n1 = 2;
    let n2 = 8;
    let suma = n1 + n2;
    res.send(suma + 'La suma es');
});

// Ruta para sumar un número proporcionado en la URL con el número 8
app.get('/sumas/:num1', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = 8;
    let suma = num1 + num2;
    res.send('La suma es: ' + suma);
});

// Ruta para calcular el área y perímetro del Trapecio
app.get('/trapecio/:baseMayor/:baseMenor/:altura/:lado1/:lado2', (req, res) => {
    let baseMayor = parseFloat(req.params.baseMayor);
    let baseMenor = parseFloat(req.params.baseMenor);
    let altura = parseFloat(req.params.altura);
    let lado1 = parseFloat(req.params.lado1);
    let lado2 = parseFloat(req.params.lado2);

    // Cálculo del área y perímetro del trapecio
    let area = ((baseMayor + baseMenor) * altura) / 2;
    let perimetro = baseMayor + baseMenor + lado1 + lado2;
    
    res.send(`Área del Trapecio: ${area}, Perímetro del Trapecio: ${perimetro}`);
});

// Ruta para calcular el área y perímetro del Paralelogramo
app.get('/paralelogramo/:base/:altura/:lado', (req, res) => {
    let base = parseFloat(req.params.base);
    let altura = parseFloat(req.params.altura);
    let lado = parseFloat(req.params.lado);


    // Cálculo del área y perímetro del paralelogramo
    let area = base * altura;
    let perimetro = 2 * (base + lado);
    
    res.send(`Área del Paralelogramo: ${area}, Perímetro del Paralelogramo: ${perimetro}`);
});

// Ruta para calcular el área y perímetro del Pentágono
app.get('/pentagono/:lado/:apotema', (req, res) => {
    let lado = parseFloat(req.params.lado);
    let apotema = parseFloat(req.params.apotema);

    // Cálculo del área y perímetro del pentágono
    let perimetro = 5 * lado;
    let area = (perimetro * apotema) / 2;
    
    res.send(`Área del Pentágono: ${area}, Perímetro del Pentágono: ${perimetro}`);
});

// Ruta para calcular el área y volumen del Cilindro
app.get('/cilindro/:radio/:altura', (req, res) => {
    let radio = parseFloat(req.params.radio);
    let altura = parseFloat(req.params.altura);

    // Cálculo del área y volumen del cilindro
    let area = 2 * Math.PI * radio * (radio + altura);
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    res.send(`Área del Cilindro: ${area}, Volumen del Cilindro: ${volumen}`);
});

app.get('/cuadradoperfecto/:numero1/:numero2', (req, res) => {
    // Obtener los números de los parámetros
    let numero1 = parseFloat(req.params.numero1);
    let numero2 = parseFloat(req.params.numero2);

    // Verificar que los parámetros sean válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        return res.status(400).send('Los parámetros deben ser números válidos.');
    }

    // Calcular el cuadrado perfecto
    let resultado = Math.pow(numero1, 2) + 2 * numero1 * numero2 + Math.pow(numero2, 2);

    // Enviar la respuesta
    res.send(`El resultado del cuadrado perfecto de (${numero1} + ${numero2})^2 es: ${resultado}`);
});
;
app.listen(3001, () => {
    console.log('Esta corriendo en el puerto 3001');
});