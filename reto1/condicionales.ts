       
            // --------------------------// RETO 1 // ----------------------- // 
// Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal //

export function zodiac(day:number, month:string):string
{
    let signo:string = "";

    if ((month == "Marzo" && day >= 21) || (month == "Abril" && day <= 19))
    {
      signo = "Aries";
    }
    if ((month == "Abril" && day >= 20) || (month == "Mayo" && day <= 20))
    {
      signo = "Tauro";
    }
    if ((month == "Mayo" && day >= 21) || (month == "Junio" && day <= 20))
    {
      signo = "Geminis";
    }
    if ((month == "Junio" && day >= 21) || (month == "Julio" && day <= 22))
    {
      signo = "Cancer";
    }
    if ((month == "Julio" && day >= 23) || (month == "Agosto" && day <= 22))
    {
      signo = "Leo";
    }
    if ((month == "Agosto" && day >= 23) || (month == "Septiembre" && day <= 22))
    {
      signo = "Virgo";
    }
    if ((month == "Septiembre" && day >= 23) || (month == "Octubre" && day <= 22))
    {
      signo = "Libra";
    }
    if ((month == "Octubre" && day >= 23) || (month == "Noviembre" && day <= 21))
    {
      signo = "Escorpio";
    }
    if ((month == "Noviembre" && day >= 22) || (month == "Diciembre" && day <= 21))
    {
      signo = "Sagitario";
    }
    if ((month == "Diciembre" && day >= 22) || (month == "Enero" && day <= 19))
    {
      signo = "Capricornio";
    } if ((month == "Enero" && day >= 20) || (month == "Febrero" && day <= 18))
    {
      signo = "Acuario";
    }
    if ((month == "Febrero" && day >= 19) || (month == "Marzo" && day <= 20))
    {
      signo = "Piscis";
    }
  return signo;
};

            // --------------------------// RETO 2 // ----------------------- // 
/*
Realizar un procedimiento que dado el nombre de un país te imprima en que continente
estás. */

export function continent(country:string):void
{
    let america:string[] = ["Venezuela", "Colombia", "Brasil", "Canada", "USA"];
    let europa:string[] = ["España", "Belgica", "Alemania", "Francia", "Italia"];
    let asia:string[] = ["China", "Camboya", "Tailandia", "Japon", "Singapur"];
    let africa:string[] = ["Senegal", "Congo", "Sudafrica", "Marruecos", "Libia"];
    let oceania:string[] = ["Australia", "Tasmania", "Nueva Zelanda", "Papúa Nueva Guinea", "Fiyi"];
    
        if(america.includes(country) )
        {
            console.log("America");
        }
        if(europa.includes(country))
        {
            console.log("Europa");
        }
        if(asia.includes(country))
        {
            console.log("Asia");
        }
        if(africa.includes(country))
        {
            console.log("Africa");
        }
        if(oceania.includes(country))
        {
            console.log("Oceania");
        }
};

                 // --------------------------// RETO 3 // ----------------------- // 

/* Realizar una función que te imprima por consola el siguiente mensaje:
- “El numero es par”, si el numero introducido como parámetro de entrada es par
- “El numero es impar”, si el numero introducido como parámetro de entrada es impar */

export function isEven(number:number):void
{
    if(number % 2 == 0)
    {
        console.log(`El numero ${number} es par`);
    }
    else if(number % 2 != 0)
    {
        console.log(`El numero ${number} es impar`);
        
    }
};


