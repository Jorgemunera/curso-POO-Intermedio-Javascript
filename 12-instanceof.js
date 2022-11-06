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

  //(1)como quiero convertir mi fabrica de objetos en prototipo lo que hacemos es quitarle el create e iniciar en mayus LearningPath y en this vamos a guardar cada propiedad y hacemos lo mismo con Student->(2)
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
//(2)aqui vamos a validar si nuestros learningPaths realmente son learningPaths y para esto vamos a cambiar la forma en que creamos a nuetros estudiantes ->(3)
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
//(4)ahora vamos a hacerlas validaciones, si nuestros lp es un array
if (isArray(learningPaths)) {
    this.learningPaths = [];
    
    for (learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    }
  }
    
    
  
    // const private = {
    //   "_name": name,
    //   "_learningPaths": learningPaths,
    // };
  
    // const public = {
    //   email,
    //   age,
    //   approvedCourses,
    //   socialMedia: {
    //     twitter,
    //     instagram,
    //     facebook,
    //   },
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
    //   get learningPaths() {
    //     return private["_learningPaths"];
    //   },
    //   set learningPaths(newLP) {
    //     if (!newLP.name) {
    //       console.warn("Tu LP no tiene la propiedad name");
    //       return;
    //     }
  
    //     if (!newLP.courses) {
    //       console.warn("Tu LP no tiene courses");
    //       return;
    //     }
  
    //     if (!isArray(newLP.courses)) {
    //       console.warn("Tu LP no es una lista (*de cursos)");
    //       return;
    //     }
        
    //     private["_learningPaths"].push(newLP);
    //   },
    // };
  
    // return public;
  }
  
  //(3) creamos instancias del prototipo con la palabra reservada new y de esta manera vamos a poder validar si nuestro prototipo es una instancia asi juan instanceof Student, diciendonos true
  //tambien creamos las instancias de LearningPath
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