const obj1={
    a: "a",
    b: "b",
    c:{
       d:"d",
       e:"e",
    },
    editA: function(newA){
        this.a=newA
    },
}

function isObject(subject){
    return typeof subject =="object";
}

function isArray(subject){
    return Array.isArray(subject);
}

//de esta manera vamos a ir metiendonos poco a poco dependiendo si es array u objeto y copiando una por una y metiendola en la copia, de esta manera no se generan copias en memoria, tambien funciona con funciones

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

const obj2 = deepCopy(obj1);
console.log(obj1);
console.log(obj2);

//vamos a modificar el obj1 a partir de su metodo editA y a modificar el obj2 en el atributo c que tiene otro objeto a ver si se modifican, tanto la copia como el orginal
//y podmos ver que no se modifican ya que no se genera una copia en memoria
obj1.editA("AAAAA");
obj2.c.e="EEEEE"
console.log(obj1);
console.log(obj2);