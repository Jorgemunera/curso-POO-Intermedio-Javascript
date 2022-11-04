// la madre de todos los superprototipos es Object

const objetito ={//objeto literal
    name: "Jorge",
    email:"jorge@platzi.com",
    age:29,
};

//llamamos al metodo statico keys del prototipo Objects, nos devolvera los atributos de nuestro objeto
Object.keys(objetito);

//lo mismo pasa con el metodo statico getOwnPropertyNames
Object.getOwnPropertyNames(objetito);

//entries tambien es un metodo estatico en el prototipo Objectm, este nos devuelve un array de arrays con un array por cada clave valor del objeto.
Object.entries(objetito);

//getOwnPropertyDescriptors tambien es un metodo estatico del prototip Object, nos devolvera un clave: nuestro atributo y su valor: un objeto con otras claves y valores. un objeto de objetos
//esto tiene que ver con el encapsulamiento,  y esta es la manera en la que javascript limita el acceso y encapsula sobre quien puede modificar y ejecutar nuestros metodos o atributos, en este caso podemos modificar estas propiedades para jugar con esto y poder limitar quien tiene acceso o quien puede modificar nuestros objetos, y esta es la herramienta que vamos a utilizar en el curso
Object.getOwnPropertyDescriptors(objetito);