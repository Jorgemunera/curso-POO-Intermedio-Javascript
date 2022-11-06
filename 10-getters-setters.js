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
    const private={
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
//(1)vamos a cambiar estas dos propiedades metodos para actualizar nuestra propiedad privada name y vamos a utilizar getters y setters
        // readName(){
        //     return private["_name"]
        // },
        // changeName(newName){
        //     private["_name"]=newName
        // },

        get name(){//y aqui ya no vamos a utilizar metodos sino directamente los getters y setters, de esta mnanera si miraramos dentro con getOwnPropertyDescriptors(juan) podriamos ver que name no tiene value ni writable, ya que en este caso el get viene haciendo de value y el set de writable
            return private["_name"];
        },
        set name(newName){
            if(newName.length !=0){
                private["_name"]=newName
            }else{
                console.warn("tu nombre debe tener al menos 1 caracter")
            }
        },
    };

// Object.defineProperty(public, "readName",{
//     writable: false,
//     configurable: false,
// });
// Object.defineProperty(public, "changeName",{
//     writable: false,
//     configurable: false,
// });

    return public
    
}

function requiredParam(param){
    throw new Error(param + " es obligatorio")
}

const juan=createStudent({name:"juanito", email:"j@ju.com"
});