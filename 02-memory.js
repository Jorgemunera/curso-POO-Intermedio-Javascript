const juanita={
    age: 15,
    email: "juanita@juanita.com",
}

const nath= juanita;

//que pasa si en un console imprimo tanto a juanita como a nath? pero dentro de llaves y en el navegador
console.log({juanita,nath});

//vamos a modificar el correo y la edad de nath
nath.email="nath@nath.com";
nath.age=20;

//despues de eso, si vemos a juanita, podemos ver que tambien cambio