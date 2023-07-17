 // --------------------------// RETO 2 // ----------------------- //

/*Realizar una función que te devuelva si existe un numero par en el array de números que
introduces como parámetro de entrada.  */

function hasEven(myNums:number[]):void
{
    let i = 0;

    while(i < myNums.length)
    {
        if(myNums[i] % 2 == 0)
        {
            console.log(`El numero ${myNums[i]} es par`)
        }
        i++
    };
};

let arr:number[] = [3, 5, 6, 7, 3, 8];

hasEven(arr);

// --------------------------// RETO 3 // ----------------------- //

/**Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
todos los nombres empiezan por M.
  */

function startWithM(myNames:string[]):boolean
{   
    let x:number = 0;
    let esVerdadero:boolean = false;
    let i = 0;
    while(i < myNames.length && myNames[i][0] == "M")
    {  
       x = i + 1;
       i++
    };
    if(x == myNames.length)
    {
       esVerdadero = true;
    }
    return esVerdadero
};

;
