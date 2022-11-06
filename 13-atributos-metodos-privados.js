function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy(subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }

  function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  
    // const private = {
    //   "_name": name,
    //   "_courses": courses,
    // };
  
    // const public = {
    //   get name() {
    //     return private["_name"];
    //   },
    //   set name(newName) {
    //     if (newName.length != 0) {
    //       private["_name"] = newName;
    //     } else {
    //       console.warn("Tu nombre debe tener al menos 1 caracter");
    //     }
    //   },
    //   get courses() {
    //     return private["_courses"];
    //   },
    // };
  
    // return public;
  }

  function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };

const private={
    "_learningPaths": [],
}
Object.defineProperty(this, "learningPaths", {
        //cuando trabajamos con getters y setters no trabajamos con value ni writable, tenemos es get y set
        get(){
           return private["_learningPaths"]
        },
        set(newLP){
    //aqui vamos a validar si nuestro newLP si realmente es una instancia de learningPath
            if ( newLP instanceof LearningPath) {
                  private["_learningPaths"].push(newLP);
             }else {
                console.warn("Alguno de los learningPath no es intancia del prototipo learningPath")
            }
              
        },
    });

    for (learningPathIndex in learningPaths){
        this.learningPaths=learningPaths[learningPathIndex];
    }
  }
    
  
  
//(1)cuando trabajamos con prototipos podemos llamar a su propiedad prototype.laclasealaqueQueremosCrearleunMetodo
//Student.prototype.LearningPath=function, esto es lo mismo que , this.learningPaths=function, pero no lko vamos a hacer asi porque queremos hacer un setter y getters para impedir que podamos manipular nuestra propiedad learningPath, sino que siga siendo un array de unicamente instancia del prototipo learningPath, entonces vamos a crear el getter y el setter con prototipos, para esto llamamos a Object.defineProperty

  const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
  const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
  const juan = new Student({
      email: "juanito@frijoles.co",
      name: "Juanito",
      learningPaths: [
          escuelaWeb,
          escuelaData,
        ],
    });