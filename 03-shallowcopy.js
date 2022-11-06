const obj1={
    a: "a",
    b: "b",
    c:{
       d:"d",
       e:"e",
    }
}

//vamos a tratar de copiar manualmente cada una de las propiedades de mi objeto, shallow copy
const obj2={};
    for(prop in obj1){
        obj2[prop] = obj1[prop];
}

//ahora modifiquemos la propiedad a de mi obj2, de esta manera obj2 cambia, pero obj1 no cambia, de la misma forma si modifico obj1 no se cambia el obj2
obj2.a="AAAAAA";
obj1.b="BBBBBB";

//------------------------------------------
//pero aunque no se modifican, si creamos otra propiedad en mi objeto original, que sea igual a otro objeto si hay problema
obj1.c.d="DDDDD"
obj2.c.e="EEEEE"

//intentando otra manera con un metodo estatico assign del superprototipo Object, que recibe 2 parametros, el primero un objeto vacio  y el segundo el objeto que queremos copiar obj1. pero nuevamente vemos que con este tambien tenemos problemas si cambiamos un atributo en mi objeto original o al contrario
const obj3= Object.assign({}, obj1)

//pero hay otra forma muy parecida que es con otro metodo estatico Object.create, que recibe 1 parametros,el objeto que queremos copiar, en consola va parecer que tenemos un objeto vacio, pero en realidad en proto tenemos todas las prpiedades.
const obj4= Object.create({}, obj1)

//y si queremos modificar estas propiedades de obj4, si modificamos a, me permite modificarla asi en proto siga apareciendo el valor inicial de a, pero de esta manera obj1 no se modifica, aunque si se modifica e o d si se modifica el original tambien, y si se modifica el objeto original tambien cambiara nuestro nuevo objeto porque el proto de obj4 apunta a obj1

