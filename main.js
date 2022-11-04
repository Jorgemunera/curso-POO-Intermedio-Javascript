const juan={
    name:"juanito",
    age: 18,
    approvedCourses:["Curso 1"],
    addCourse(newCourse){
        // console.log("This", this);
        // console.log("This.approvedCourses", this.approvedCourses)
        this.approvedCourses.push(newCourse);
    }
};
//normalmente podriamos entrar al metodo asi
//juan.addCourses("Curso 2")


//vamos a utilizar un metodo estatico para crear nuevas propiedades en nuestro objeto, pero con la posibilidad que vamos a poder editarlo por dentro, esta funcion recibe 3 parametros, nombre del objeto, nombre del nuevo atributo y nuestra lista de atributos

//numerable:false y el resto true
//cuando utilizamos el Objet.keys(juan) que nos muestra los atributos NO podemos ver el atributo navigator
//cuando utilizamos Object.getOwnPropertyNames(juan) que tambien nos muestra los atributos SI podemos ver el atributo navigator
//SI se puede redefinir el valor, SI  borrarla
Object.defineProperty(juan, "navigator",{
    value:"Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
});

//writable:false y el resto true
//cuando utilizamos el Objet.keys(juan) que nos muestra los atributos SI podemos ver el atributo navigator
//cuando utilizamos Object.getOwnPropertyNames(juan) que tambien nos muestra los atributos SI podemos ver el atributo editor
//NO se puede redefinir el valor,  SI borrarla
Object.defineProperty(juan, "editor",{
    value:"VSCode",
    enumerable: true,
    writable: false,
    configurable: true,
});


//configurable:false y el resto true
//cuando utilizamos el Objet.keys(juan) que nos muestra los atributos SI podemos ver el atributo navigator
//cuando utilizamos Object.getOwnPropertyNames(juan) que tambien nos muestra los atributos SI podemos ver el atributo terminal
//SI se puede redefinir el valor,  NO borrarla
Object.defineProperty(juan, "terminal",{
    value:"WSL",
    enumerable: true,
    writable: true,
    configurable: false,
});

//todo false
//cuando utilizamos el Objet.keys(juan) que nos muestra los atributos NO podemos ver el atributo navigator
//cuando utilizamos Object.getOwnPropertyNames(juan) que tambien nos muestra los atributos SI podemos ver el atributo pruebaNasa
//NO se puede redefinir el valor,  NO borrarla
Object.defineProperty(juan, "pruebaNasa",{
    value:"extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));


//OTROS METODOS ESTATICOS Object.seal(), Object.freeze()
//vamos a ver como afecta a los atributos de mi objeto
//con Object.seal: todas nuestras propiedades configurable de todos nuestros atributos se colocan como FALSE
Object.seal(juan);


//con Object.freeze: todas nuestras propiedades configurable de todos nuestros atributos se colocan como FALSE y tambien writable como FALSE
Object.freezer(juan);