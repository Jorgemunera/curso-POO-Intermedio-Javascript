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

//vamos a crear una clase de estudiante base, vamos a aplicar la abstraccion sin prototipos

const studentBase={
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter:undefined,
        instagram:undefined,
        facebook:undefined,
    },
};

const juan= deepCopy(studentBase);
//de esta manera podriamos modificar el valor de cada propiedad y proteger el mismo uno por uno, pero hay una forma mas rapida que es con Object.seal()

// Object.defineProperty(juan,"name",{
//     value: "Juanito",
//     configurable:false,
// });
Object.seal(juan);

//y tambien podemos verificar si las propiedades estan protegidas con
Object.isSeal(juan);
Object.isFrozen(juan);