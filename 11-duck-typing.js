function isObject(subject){
    return typeof subject =="object";
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;
    const subjectIsArray=isArray(subject);
    const subjectIsObject=isObject(subject)

    if(subjectIsArray){
        copySubject=[];
    }else if(subjectIsObject){
        copySubject={};
    }else{
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key]=deepCopy(subject[key]);
        }else {
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else {
                copySubject[key] =subject[key];
            }
        }
    }
    return copySubject;
};
//(2)vamos a utilizar RORO , vamos a recibir diferentes parametros, o recibir un objeto que por dentro tiene las propiedades que necesitamos
function createLearningPath({
    name=requiredParam("name"),
    courses = [],
}){
    const private={
        "_name": name,
        "_courses": courses,
    };
    const public = {
        get courses(){
            return private["_courses"];
        },
        
    };

    return public;
}

function createStudent({
    name=requiredParam("name"),
    email=requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses=[],
//(1)lo que vamos hacer ahora es que esta propiedad validar si lo que estamos incluyendo sonrealmente rutas de aprendizaje, para esto vamos a crear una funcion para crear learningpaths->(2)
    learningPaths=[],
}={}){
    const private={
        "_name": name,
        "_learningPaths": learningPaths,
    };


    const public={
        age,
        approvedCourses,
//(3)vamos a eliminar learningPath dentro de public y vamos a crear una con getters y setters y por lo mismo creamos una propiedad _learningPaths en private. y desde el objeto public tenemos la mision de validar si realmente para setear nuestra ruta de aporendizaje estamos realmente recibiendo una ruta de aprendizaje->(4)
        email,
        socialMedia:{
            twitter,
            instagram,
            facebook,
        },
        
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length !=0){
                private["_name"]=newName
            }else{
                console.warn("tu nombre debe tener al menos 1 caracter")
            }
        },
        get learningPaths(){
            return private["_learningPaths"];
        },
        set learningPaths(newLP){
//(4)aqui deberemos validar si es una ruta de aprendizaje valida o no, lo que necesitamos validar es si tiene un array de courses y tiene un nombre
//el primer if va a llamar al getter de nuestro learningPath y nos va a devolver un resultado solo si le estamos entregando un lp, pero hay que caer en cuenta que lo que estamos validad es que propiedades tienen nuestros objetos, pero no quienes son, de donde salieron como se crearon, para esto vamos a utilizar instance OP->(next clase 12)
            if(!newLP.name){
                console.warn("tu LP no tiene nombre");
                return;
            }
            if(!newLP.courses){
                console.warn("tu LP no tiene courses");
                return;
            }
            if(!isArray(newLP.courses)){
                console.warn("tu LP no es una lista (de cursos)");
                return;
            }

            private["_learningpPaths"].push(newLP)
        },
    };

    return public
    
}

function requiredParam(param){
    throw new Error(param + " es obligatorio")
}

const juan=createStudent({name:"juanito", email:"j@ju.com"
});

