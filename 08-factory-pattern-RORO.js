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

// const studentBase={
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         twitter:undefined,
//         instagram:undefined,
//         facebook:undefined,
//     },
// };


//lo que vamos a hacer es crear una funcion que es una fabrica de estudiantes

function createStudent({//se le esta pasando un objeto y asu vez se le esta asignando un objeto vacio por defecto, de esta manera no tenemos que memorizar el orden de los parametro cuando estemos creando el estudiante
    name=requiredParam("name"),
    email=requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses=[],
    learningPaths=[],
}={}){
    return {
        name,
        age,
        socialMedia:{
            twitter,
            instagram,
            facebook,
        },
        approvedCourses,
        learningPaths,
        email,
    };
}

//vamos a crear una funcion para hacer que el name o el email sean obligatorios
function requiredParam(param){
    throw new Error(param + " es obligatorio")
}

const juan=createStudent({name:"juanito", email:"j@ju.com"
});