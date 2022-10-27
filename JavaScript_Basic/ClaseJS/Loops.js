var estudiantes=["Oscar","Fabian","Lorena"];
function SaludarEstudiantes(estudiante){
    console.log(`Hola,${estudiante}`);
}
for (var i=0; i< estudiantes.length; i++){
   SaludarEstudiantes(estudiantes[i])
}

var estudiantes=["Oscar","Fabian","Lorena"];
function SaludarEstudiantes(estudiante){
    console.log(`Hola,${estudiante}`);
}
for (var estudiante of estudiantes){
   SaludarEstudiantes(estudiante)
}

