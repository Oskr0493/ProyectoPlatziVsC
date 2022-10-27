var Articulos=[
    {nombre:"Bici",costo:100},
    {nombre:"Teclado",costo:7},
    {nombre:"Audifonos",costo:10},
    {nombre:"Mouse",costo:4},
    {nombre:"Lampara",costo:45},
    {nombre:"Tijera",costo:2},
    {nombre:"Mochila",costo:30},
    {nombre:"Laptop",costo:1500},
    {nombre:"Tv",costo:1700},
];

var articulosFiltrados=Articulos.filter(function(Articulo){
    return Articulo.costo<=2
});


var nombreArticulo=Articulos.map(function(Articulo){
    return Articulo.nombre
});


var encuentraArticulo=Articulos.find(function(Articulo){
    return Articulo.nombre ==="Mouse"
});

Articulos.forEach(function(Articulo){
    console.log(Articulo.nombre)
});

var ArticulosBaratos= Articulos.some(function(articulo){
    return articulo.costo<= 70
})