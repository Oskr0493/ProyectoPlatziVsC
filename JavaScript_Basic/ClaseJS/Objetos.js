var MiAuto ={
   marca:"Renault",
   modelo:"Stepway",
   annio:"2023",
   detalleAuto: function(){
    console.log(`Auto ${this.marca} ${this.annio}`);
   }
};



/* creando constructores----------------------------------------------------------*/



var Autos=[];

function auto(marca,modelo,annio){
    this.marca= marca;
    this.modelo=modelo;
    this.annio=annio;
}

for (var i=0; i<30;i++){
    var marca=["Toyota","Mazda","Renault","Chevrolet"];
    var modelo=["Corolla","CX-5","Captur","Onix"];
    var annio=["2020","2021","2022","2021"];
    var Autonuevo= new  auto(marca[i],modelo[i],annio[i])
    var AgregarAuto= Autos.push(Autonuevo)
 }

 console.log(Autos);