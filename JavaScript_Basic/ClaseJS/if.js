var Jugador1= 'Piedra';
var Jugador2='Papel';
var resultado;

function Juega() 
{
    if (Jugador1==Jugador2){

        return resultado='Empate'
    }
    if( (Jugador1=='Piedra' && Jugador2=='Tijera')||(Jugador1=='Tijera'&& Jugador2=='Papel')||(Jugador1=='Papel' && Jugador2=='Piedra')){
        return resultado= 'Gana Jugador1';
    }
  else if( (Jugador2=='Piedra' && Jugador1=='Tijera')||(Jugador2=='Tijera'&& Jugador1=='Papel')||(Jugador2=='Papel' && Jugador1=='Piedra')){
    return resultado= 'Gana Jugador2';
    }
    else {
        return resultado='Valores Erroneos';
    }

}
console.log(Juega());


