let Nombre="Oscar";
let Apellido="Mejia";
let Nombre_Usuario_Platzi="Ofmc04";
let Edad= 28;
let Correo="Ofmc04@hotmai.com";
let Mayor_Edad=true;
let Ahorrado=1500000;
let Deudas=50000;

var Dinero_real=Ahorrado-Deudas;

console.log(`Mi Nombre es:  ${Nombre} ${Apellido}`,`Mi pasivo es:${Dinero_real}`);

//...............................Examen Funciones.............................................//

    const name="Oscar Fabian";
    const lastName="Mejia Calambas";
    const FullName= name +" "  +  " " +lastName;
    const nickname="Oskr";

    console.log("Mi nombre es:"+ FullName + " Pero prefiero me digas: " + nickname +".");

    function presentacion(name, lastname, nickname){
        console.log(`Mi Nombre es:  ${name} ${lastname}`,` Pero prefiero me digas:${nickname}`);
    }
    presentacion("1","2","3");

    //...............................Examen Condicionales.............................................//


    let SuscriptionType="Expert";

    switch (SuscriptionType){
            case("Free"):
                    console.log("Solo Puedes Tomar un curso Gratis");
            break;
            case("Basic"):
                    console.log("Puedes tomar todos los cursos por 1 mes");
            break;
            case("Expert"):
                    console.log("puedes tomar todos los cursos por 1 años");
            break;
            case("ExpertPlus"):
                    console.log("Tu y alguien mas puede tomar los cursos por 1 año");
            break;
    }

    //...............................Examen Condicionales if.............................................//


    let SuscriptionType="Expert"

    if (SuscriptionType=="Free"){
        console.log("Solo Puedes Tomar un curso Gratis");
    }
    else if (SuscriptionType=="Basic"){
        console.log("Puedes tomar todos los cursos por 1 mes");
    }
    else if (SuscriptionType=="Expert"){
        console.log("puedes tomar todos los cursos por 1 años");
    }
    else if (SuscriptionType=="ExpertPlus"){
        console.log("Tu y alguien mas puede tomar los cursos por 1 año");
    }
    else {
        console.log("No tienes ninguna Suscripcion");
    }

//...............................examen Ciclos............................................//



for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}



 let i=0
while(i<10){
    console.log("El valor de i es: " + i);
    i++
}


let i=10
while(i>=1){
    console.log("El valor de i es: " + i);
    i--
}

//.....................................examen  Arrays......................................................//


function imprimirArray (Arr){
    console.log(Arr[0])
}

imprimirArray(["Thiago","Oscar","Loren","Fabian"])


function imprimirArray (Arr){
    for(let i=0; i<Arr.length; i++)
    console.log(Arr[i])
}
imprimirArray(["Thiago","Oscar","Loren","Fabian"])




const Articulos=[
    {nombre:"Bici",costo:100},
    {nombre:"Teclado",costo:7},
    {nombre:"Audifonos",costo:10},
    {nombre:"Mouse",costo:4},
    {nombre:"Lampara",costo:45},
    {nombre:"Tijera",costo:2},
    {nombre:"Mochila",costo:30},
    {nombre:"Laptop",costo:1500},
    {nombre:"Tv",costo:1700},]


function imprimirArray (Articulos){
    const arr=Object.values(Articulos)
    for(let i=0; i<arr.length; i++)
    console.log(arr[i])
}
 imprimirArray (Articulos)

//.....................................Examen Bonus......................................................//


function ConseguirTipoSuscribcion(suscripcion) {
    if (suscripcion=="Free"){
        console.log("Solo Puedes Tomar un curso Gratis");
        return;
    }
    if (suscripcion=="Basic"){
        console.log("Puedes tomar todos los cursos por 1 mes");
        return;
    }
    if (suscripcion=="Expert"){
        console.log("puedes tomar todos los cursos por 1 años");
        return;
    }
    if (suscripcion=="ExpertPlus"){
        console.log("Tu y alguien mas puede tomar los cursos por 1 año");
        return;
    } 
    console.warn('Este Tipo Suscripcion no existe')

}
ConseguirTipoSuscripcion('Free')




 const Tiposuscripcion={
    Free:"Solo Puedes Tomar un curso Gratis",
    Basic:"Puedes tomar todos los cursos por 1 mes",
    Expert:"puedes tomar todos los cursos por 1 años",
    ExpertPlus:"Tu y alguien mas puede tomar los cursos por 1 año",
 };

 Tiposuscripcion.Free


 function ConseguirTipoSuscripcion(suscripcion){
    if(Tiposuscripcion[suscripcion]){
        console.log(Tiposuscripcion[suscripcion]);
        return;
    }
    console.warn('Este Tipo Suscripcion no existe')
 }
 ConseguirTipoSuscripcion('Free')









