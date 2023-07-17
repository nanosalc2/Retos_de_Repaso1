import { isEven } from "./condicionales";
import { add } from "./buclesFor.js";

/**Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
par o impar la suma de los caracteres de cada uno de los siguientes arrays:
 */

let cMayuscula:string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let bMayuscula:string[] =  ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let vMayuscula:string[] = ["Venezuela", "Veneno", "Voltaje"];

let sumaCaracterC:number = add(cMayuscula);
let sumaCaracterB:number = add(bMayuscula);
let sumaCaracterV:number = add(vMayuscula);
isEven(sumaCaracterC);
isEven(sumaCaracterB);
isEven(sumaCaracterV)