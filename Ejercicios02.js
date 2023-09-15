function devolverString(str){
    // 🎯 'Return' la string provista: str
    // Tu código: 
    return str.toString();
}

const devolverString = (str)=>str.toString()

function suma(x, y){
    // "x" e "y" son números: 
    // 🎯 suma "x" e "y" y retorná el valor
    // Tu código: 
    return x+y;
}

const suma = (x, y)=>x+y;

function resta(x, y){
    // 🎯 resta "y" e "x" y retorná el valor
    // Tu código: 
    return x-y;
}

const resta = (x, y)=>x-y;

function multiplicar(x, y){
    // 🎯 multiplica "x" e "y" y retorná el valor
    // Tu código: 
    return x * y;
}

const multiplicar = (x, y)=>x*y;

function dividir(x, y){
    // 🎯 dividí "x" e "y" y retorná el valor
    // Tu código: 
    if (y === 0 ) return "No es posible realizar la division";
    return x / y;
}

const dividir = (x, y)=> { if(y ===0) return "No es posible realizar la division";
    return  x / y ; 
}

function igualdad(x, y){
    // 🎯 Devolvé "true" si "x" e "y" son iguales, de lo contrario devolvé "false".
    // Tu código: 
    if (x===y){
        return true
    } return false 
}

const igualdad = (x, y)=>{if(x===y) return true;
    return false}


function compararLongitur(str1, str2){
    // 🎯 Devolvé "true" si las dos strings tienen la misma longitud, de lo contrario devolvé "false".
    // Tu código: 
    const long1 = str1.length;
    const long2 = str2.length;
    if (long1===long2) return true; //
    return false; 
}

function menorQueNoventa(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es menor que noventa, de lo contrario devolvé "false".
    // Tu código: 
    if (num < 90) return true;
    return false;
}

function mayorQueCincuenta(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es mayor que cincuenta, de lo contrario devolvé "false".
    // Tu código: 
    if (num >50) return true;
    return false;
}

function obtenerResto(x, y){
    // 🎯 Obtener el resto de la división de "x" e "y".
    // Tu código: 
    return x % y
}

const obtenerResto2 = (x,y) => x % y;

function esPar(num){
    // 🎯 Devolvé "true" si "num" es par, de lo contario devolvé "false".
    // Tu código: 
    const resto= num % 2;
    if (resto == 0) return true; //
    return false 
}

const esPar2 = (num) => { if (num %2 ===0) return true;
    return false }

function esImpar(num){
    // 🎯 Devolvé "true" si "num" es impar, de lo contario devolvé "false".
    // Tu código: 
    const resto= num % 2;
    if (resto !== 0) return true; //
    return false 
}

const esImpar2 = (num) => { if (num %2 !==0) return true;
    return false }

function elevarAlCuadrado(num){
    // 🎯 Devolvé el valor de "num" elevado al cuadrado.
    // Tu código: 
    return num * num
}


const elevarAlCuadrado= (num) => num * num;

function elevarAlCubo(num){
    // 🎯 Devolvé el valor de "num" elevado al cubo.
    // Tu código: 

    return num * num *num
}

const elevarAlCubo= (num) => num*num*num;

function elevar(num, exponent){
    // 🎯 Devolvé el valor de "num" elevado al exponente dado en "exponent".
    // Tu código: 
    return num ** exponent
}

const elevar = (num, exponent) => num ** exponent ;

function redondearNumero(num){
    // 🎯 Devolvé el valor de "num" redondeado al entero más próximo.
    // Tu código: 
    return Math.round(num)
}

const redondearNumero = (num) => Math.round(num) ;

function redondearHaciaArriba(num){
    // 🎯 Devolvé el valor de "num" redondeado hacia arriba (al próximo entero).
    // Tu código: 
    return Math.ceil(num)
}

const redondearHaciaArriba= (num) => Math.ceil(num) ;


function numeroRandom(){
    // 🎯 Generar un número al azar entre 0 y 1 y devolverlo.
    // 🕵️ Pista: investigá que hace el método Math.random(). 
    // Tu código: 
    return Math.random();
}

const numeroRandom1 = (Math.random())

function esPositivo(num){
    // La función va a recibir un número entero. Devolvé como resultado una cadena de texto que indica si el número es positivo o negativo: 
    // 🎯 Si el número es positivo, devolver el string "Es positivo".
    // 🎯 Si el número es negativo, devolver el string "Es negativo".
    // 🎯 Si el número es 0, devolver false.
    // Tu código: 
    if (num >0 ) return `${num} Es positivo`
    else if (num < 0) return `${num} Es negativo`
    return `false`;
}

const esPositivo = (num) =>{
    if (num >0 ) return `${num} Es positivo`
    else if (num < 0) return `${num} Es negativo`
    return `false`;
}

function agregarSimboloDeExclamacion(str){
    // 🎯 Agregá un símbolo de exclamación al final de la string "str" y devolvé una nueva string 
    // Ejemplo: "hello world" pasaría a ser "hello wolrd!".
    // Tu código: 
    return `${str}!`
}

const agregarSimboloDeExclamacion= (str) =>`${str}!`
    
    
    function combinarNombres(nombre, apellido){
    // 🎯 Devolver "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Diego", "Maldonado" => "Diego Maldonado".
    // Tu código: 
    return `${nombre} ${apellido}`
}

const combinarNombres = (nombre, apellido) =>`${nombre} ${apellido}`

function retornarSaludo(nombre){
    // 🎯 Tomá la string "nombre" y concatená otras string en la cadena para que tome la siguiente forma:
    // "Diego" => "Hola Diego!".
    // Tu código: 
    return `Hola ${nombre}`
}

const retornarSaludo =(nombre) =>`Hola ${nombre}`;

const retornarSaludo = (nombre)=>`Hola ${nombre}`

function areaDelRectangulo(alto, ancho){
    // 🎯 Devolver el área de un rectángulo teniendo su altura y ancho.
    // 🕵️ Pista: investigá como se calcula el area de un rectángulo. 
    // Tu código: 

    return `El area del rectangulo es igual a ${alto*ancho}`
}

const areaDelrectangulo = (alto , ancho)=>`El area del rectangulo es igual a ${alto*ancho}`;


function perimetroDelCuadrado(lado){
    // 🎯 Escibí una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    // 🕵️ Pista: investigá como se calcula el perímetro de un cuadrado. 
    // Tu código: 

    return `El perimetro del cuadrado es igual a ${lado*4}`
}

const perimetroDelCuadrado = (lado) => `El perimetro del cuadrado es igual a ${lado*4}`

function areaDelTriangulo(base, altura){
    // 🎯 Desarrollá una función que calcule el área de un triángulo.
    // 🕵️ Pista: investigá como se calcula el área de un triángulo. 
    // Tu código: 
    return `El area del triangulo es igual a ${base*altura /2}`
}


const areaDelTriangulo = (base, altura) => `El area del triangulo es igual a ${base*altura /2}`

function deEuroAdolar(euro){
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // 🎯 Escribí un programa que reciba como parámetro un número de euros y calcule el cambio en dólares.
    // Tu código: 
    const change = 1.2
    return `El total de dolares que corresponden a ${euro} euros  es igual a ${euro *change} dolares`
}

const deEuroAdolar = (euro) => {
    const change = 1.2;
    return `El total de dolares que corresponden a ${euro} euros  es igual a ${euro *change} dolares`
}

function esVocal(letra){
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    // Tu código: 
    if (letra.length>1) return "Dato Incorrecto"
    const vocales = [ 'a' ,'e' ,'i','o','u']
    if ( vocales.includes(letra)) return ` ${letra} es Vocal`
    return `${letra} no es vocal`
}

const esVocal = (letra) => {
    if(letra.length>1) return "Dato Incorrecto";
    const vocales = [ 'a' ,'e' ,'i','o','u'];
    if ( vocales.includes(letra)) return ` ${letra} es Vocal`
    return `${letra} no es Vocal`;
}