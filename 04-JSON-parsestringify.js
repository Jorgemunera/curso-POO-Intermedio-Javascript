//vamos a copiar objetos de manera DEEPCOPY utilizando JSON.stringify y JSON.parse

const obj1={
    a: "a",
    b: "b",
    c:{
       d:"d",
       e:"e",
    }
}

//JSON.stringify es un metodo estatico del prototipo JSON que nos permite convertir objetos en un string

const stringifyComplexObj=JSON.stringify(obj1);
console.log(stringifyComplexObj);

//JSON.parse de un string nos crea un objeto, y vamos a tratar de modificar nuestro obj1 el original y la copia a ver si se afectan. y como podemos darnos cuenta, no se afecta ni el obj1 ni la copia, y es porque no se estan generando copias a la referencia en memoria de ninguno de los objetos.
//primero con JSON.stringify estamos creando un string que se guarda en memoria stack y luego estamos creando un objeto, entonces no guarda nada en la memoria heap
//esto es muy bueno excepto cuando trabajamos con metodos o funciones dentro de objetos
const obj2= JSON.parse(stringifyComplexObj);
console.log(obj2);