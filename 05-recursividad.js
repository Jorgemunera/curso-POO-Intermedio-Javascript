 const numeritos=[1,4,3,2,6,7,5,8,9,4,6,9,3,5,7,9,10];
// let numerito=0;

// for(let i=0; i<numeritos.length;i++){
//     numerito=numeritos[i];
//     console.log(i, numerito);
// }

//lo mismo con una funcion recursiva

function recursiva(numArray){
    if(numArray.length !==0){
        const firstNum=numArray[0];
        console.log(firstNum)
        numArray.shift();
        recursiva(numArray);
    }
}

console.log(recursiva(numeritos))