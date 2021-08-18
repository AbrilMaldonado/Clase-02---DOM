/* // Seleccionar un elemento por su ID
console.log(document.querySelector("#chau").innerText)
// Seleccionar el primer elemento de su tipo
console.log(document.querySelector("p").innerText)
// Seleccionar el primer elemento de su clase
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de su tipo
console.log(document.querySelectorAll("p").innerText) // Esto es un arreglo
// Seleccionar todos los elementos de su clase
console.log(document.querySelectorAll(".p").innerText)
// Seleccionar varios tipos de elementos
console.log(document.querySelectorAll("p,span").innerText)
// Seleccionar el primer elemento de un grupo
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de una clase y tipo
console.log(document.querySelectorAll("p.hola").innerText)



document.querySelectorAll(".hola").forEach(e => console.log( e.innerHTML)) // Recorrer el arreglo 

console.log(document.querySelectorAll("p,span").forEach(e =>e.innerHTML)) //Nos devuelve undefined

console.log(document.querySelector("#chau").innerHTML)

document.querySelector(".hola").innerText = "<a href=''>Hola</a>" // Cambia el texto dentro de una etiqueta
document.querySelector(".chau").innerHTML = "<a href=''>Hola</a>" // Cambia la naturaleza del elemento


let mascota = document.querySelector("#mascota").innerHTML

const foto = m => m ==="gatito" ? document.querySelector("img").src = "gatito.jpg" : document.querySelector("img").src = "perrito.jpg"

document.querySelector("#texto").innerText = `Su mascota preferida es: ${mascota}`

foto(mascota)
 */



//0. En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
// a) El primer span
// b) El primer span con clase “guayerd”
// c) El span con id “hola”
// d) Todos los span
// e) Todos los elementos  con clase “guayerd”
// f) Todos los span con clase “guayerd”.
// g) Todos los span y párrafos.

/* //a-
console.log(document.querySelector("span").innerText);

//b-
console.log(document.querySelector("span.guayerd").innerText);

//c-
console.log(document.querySelector("#hola").innerText);

//d-
document.querySelectorAll("span").forEach(e => console.log(e.innerHTML));

//e-
document.querySelectorAll(".guayerd").forEach(e => console.log(e.innerText));

//f-
document.querySelectorAll("span.guayerd").forEach(e => console.log(e.innerText));

//g-
document.querySelectorAll("span,p").forEach(e => console.log(e.innerText)); */




//1. Agregar en el archivo HTML con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros 
// no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.
// a) Al ID azul cambiarle el texto por “Azul”.
// b) Al primer párrafo cambiarle el texto por “Verde”.
// c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
// d) A todos los párrafos agregarles un “!” al final del texto. 
// e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.


/* //a-
document.querySelector("#azul").innerText = "Azul";

//b-
document.querySelector("p").innerText = "Verde";

//c-
const cambio = document.querySelectorAll(".rojo").forEach(e => e.innerText = "Rojo");

cambio();

//d-
document.querySelectorAll("p").forEach(e => e.innerText = `${e.innerText}!`);

//e-
document.querySelectorAll("p","h1").forEach(e => e.innerText = "*" + e.innerText); */


/* 2. Crear una función flecha que en base a 2 datos de temperatura, indique la
temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un
mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media
es ….”. */

/* const temp1 = 20;
const temp2 = 35;

const temperaturaMedia = (t1, t2) => {
    return (t1+t2) / 2;
}

document.querySelector("p").innerText = `La temperatura media entre ${temp1} y ${temp2} es ${temperaturaMedia(temp1,temp2)}`; */

/* 3. Crear una función flecha que solicite al usuario que elija entre las estaciones del año
(Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la
estación elegida. */

/* const estacion = prompt("Elija su estación del año favorita (Invierno, verano, primavera u otoño").toLowerCase();

const estacionAnio = (est) => {
    switch(est){
        case "invierno": 
            document.querySelector("img").src = "invierno.jpg";
            break;
        
        case "verano":
            document.querySelector("img").src = "verano.jpg";
            break;   
        
        case "primavera": 
            document.querySelector("img").src = "primavera.jpg";
            break;
        
        case "otoño":
            document.querySelector("img").src = "otonio.jpg";
            break;    
    }
}

estacionAnio(estacion); */


/* 4. Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html
un mensaje personalizado indicando si es mayor o menor de edad. */

/* const anio = 2021;
const nacimiento = prompt("Ingrese el año en que nació.");

const edad = (year, nac) => {
    let anios = year-nac;
    if(anios >= 18){
        document.querySelector("p").innerText = `Usted nació en el año ${nac}, tiene ${anios} por lo tanto es mayor`;
    } else{
        document.querySelector("p").innerText = `Usted nació en el año ${nac}, tiene ${anios} por lo tanto es menor`;
    }
}

edad(anio, nacimiento); */


/* 5. Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3
    o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona
    y mostrando una foto de su animal favorito. */

/* const nombre = prompt("Ingrese su nombre");
const animal = prompt("Cual es su animal favorito? Perro, gato, vaca o mono?").toLowerCase();

const animalFav = (nom, anim) => {
    if(anim==="perro"){
        document.write(`<p>Hola ${nom}</p> este es tu animal favorito!`)
        document.write(`<img src="perro.jpg" alt="perro">`);
    } else if(anim === "gato"){
        document.write(`<p>Hola ${nom}</p> este es tu animal favorito!`)
        document.write(`<img src="gato.jpg" alt="gato">`);
    } else if(anim === "vaca"){
        document.write(`<p>Hola ${nom}</p> este es tu animal favorito!`)
        document.write(`<img src="vaca.jpg" alt="vaca">`);
    } else{
        document.write(`<p>Hola ${nom}</p> este es tu animal favorito!`)
        document.write(`<img src="mono.jpg" alt="mono">`);
    }
}

animalFav(nombre, animal); */



/* 6. Crear en el HTML un span con un ángulo del 0 al 360. Luego calcular su opuesto y
mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por
ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
Ángulo: 90
Opuesto: 270 */

/* const angulo = parseInt(prompt("Ingrese un valor de ángulo de 0 a 360"));

let obtenerAnguloOpuesto = ang => {
    document.querySelector("span.angulo").innerText = `Ángulo: ${ang}`;
    document.querySelector("span.opuesto").innerText = `Opuesto: ${360 - ang}`;
}

obtenerAnguloOpuesto(angulo); */


/* 7. Generación de mails empresariales. Le solicitamos al usuario su nombre, su
apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el
HTML un mensaje con su usuario nuevo:
nombre.apellido@empresa.com(.ar si es argentina). */

/* let nombre = prompt("Ingrese su nombre").toLowerCase();
let apellido = prompt("Ingrese su apellido").toLowerCase();
let empresa = prompt("Ingrese la empresa en donde trabaja").toLowerCase();
let arg = prompt("¿La empresa es argentina?").toLowerCase();

if(arg==="si"){
    document.write(`<p>Su usuario nuevo es: \n ${nombre}.${apellido}@${empresa}.com.ar</p>`)
} else{
    document.write(`<p>Su usuario nuevo es: \n ${nombre}.${apellido}@${empresa}.com</p>`)
} */


/* 8) En un restaurante tienen menú del día según el día de la semana.
a) Crearemos una función flecha que reciba qué día de la semana es (Lunes a
viernes) y mostraremos por HTML el menú con el nombre del plato y una imagen del
mismo.
Lunes: Milanesas con puré
Martes: Fideos con salsa
Miércoles: Pizza
Jueves: Hamburguesas con papas fritas
Viernes: Pastel de papa */

/* const dia = prompt("Ingrese el día de la semana").toLowerCase();

const menu = (day) => {
    switch(day){
        case "lunes":
            document.write(`<p>Milanesas con puré</p> <br> <p>$300</p>`);
            document.querySelector("img").src = "milanesa.jpg";
        break;
        
        case "martes":
            document.write(`<p>Fideos con salsa</p> <br> <p>$250</p>`);
            document.querySelector("img").src = "fideos.jpg";
        break;    

        case "miercoles":
            document.write(`<p>Pizza</p> <br> <p>$400</p>`);
            document.querySelector("img").src = "pizza.jpg";
        break;
        
        case "jueves":
            document.write(`<p>Hamburguesa con papas fritas</p> <br> <p>$430</p>`);
            document.querySelector("img").src = "hamburguesa.jpg";
        break;    

        case "viernes":
            document.write(`<p>Pastel de papa</p> <br> <p>$280</p>`);
            document.querySelector("img").src = "pastel.jpg";
        break;  
    }
}

menu(dia); */

































    


