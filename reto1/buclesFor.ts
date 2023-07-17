// --------------------------// RETO 2 // ----------------------- // 
/*
 Realizar una función que imprima los números impares existentes hasta el número
indicado como parámetro de entrada.
 */

export function evenNumbers(num:number):void
{
    for(let i= 0; i <= num; i++)
    {
       if(i % 2 != 0)
       {
          console.log(i);
       }   
    }
};

     // --------------------------// RETO 3 // ----------------------- // 
/*
Realizar una función que como parámetro de entrada reciba un array y como salida
devuelva el array revertido. No se puede utilizar el método revert de la clase array
 */

export function myRevert(myArr:number[]):number[]
{
    let newArray:number[] = [];
    for(let i = myArr.length -1; i >= 0; i--)
    {
        newArray.push(myArr[i])
    }
    return newArray
};

/*
   4. Realizar una función que reciba como parámetro un array de strings que contenga
nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)*/


export function isRainbow(colors:string[]):void
{
    let rainbow:string[] = ["Amarillo", "Azul", "Naranja", "Morado", "Rojo", "Verde"];
    for( let i = 0; i < colors.length; i++)
    {
        if(rainbow.includes(colors[i]))
        {
            console.log(`El color ${colors[i]} está en el arcoíris`);
            
        }
        else
        {
            console.log(`El color ${colors[i]} no está en el arcoíris`);
        }
       
    }
   
};


          // --------------------------// RETO 5 // ----------------------- //


/*
 Realizar una función que te devuelva la suma del numero de caracteres de las palabras
almacenadas en un array.
 */

export function add(myWords:string[]):number
{
    let x:number = 0;
    for(let i = 0; i < myWords.length; i++)
    {
        x += myWords[i].length;
    }
    return x
};


