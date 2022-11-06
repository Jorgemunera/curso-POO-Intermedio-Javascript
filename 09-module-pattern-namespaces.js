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

function createStudent({
    name=requiredParam("name"),
    email=requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses=[],
    learningPaths=[],
}={}){
//(2)para solucionar el problema de que si puedan seguir cambiando el nombre vamos a hacer esto
//en este caso lo que vamos hacer es separar a nuestras propiedades publicas y privadas
    const private={//(3)y aqui lo que estamos protegiendo es que no puedan editar nada en name, sin embargo van a poder modificar el metodo changeName y de esa manera saltarse el filtro de el name que esta como propiedad privada, para esto->(4)
        "_name": name,
    };


    const public={
        age,
        socialMedia:{
            twitter,
            instagram,
            facebook,
        },
        approvedCourses,
        learningPaths,
        email,
        readName(){
            return private["_name"]
        },
        changeName(newName){
            private["_name"]=newName
        },

    };
//(4) lo que vamos a hacer es evitar que puedan modificar esta funcion readName, pero de esta manera no nos permitiria trabajar bien el polimorfismo cuando protejamos alguna de estas propiedades, pero para lo que queremos vale la pena

Object.defineProperty(public, "readName",{
    writable: false,
    configurable: false,
});
Object.defineProperty(public, "changeName",{
    writable: false,
    configurable: false,
});

    return public
//(1)crear una funcion change name, no queremos que los estudiantes puedan actualizar su nombre, asi que este metodo sera el que vamos a utilizar para actualizar nuestro nombre, pero aqui todavia se puede volver a modificar el nombre con juan.name=""
    
}

function requiredParam(param){
    throw new Error(param + " es obligatorio")
}

const juan=createStudent({name:"juanito", email:"j@ju.com"
});