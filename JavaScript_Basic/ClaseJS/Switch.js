var Jugador1='Papel';
var Jugador2='Tijera';
var resultado;

function juego() {
    switch(true){
    case  
    Jugador1==Jugador2:
    return resultado='EMPATE';
    break;
    case 
    Jugador1=='Tijera' && Jugador2=='Papel':
    return resultado= 'Gana Jugador1';
    break;
    case
    (Jugador1=='Piedra' && Jugador2=='Tijera'):
    return resultado= 'Gana Jugador1';
    break;
    case 
    (Jugador1=='Papel' && Jugador2=='Piedra'):
    return resultado= 'Gana Jugador1';
    break; 
    case  
    (Jugador2=='Piedra' && Jugador1=='Tijera'):
    return resultado= 'Gana Jugador2';
    break;
    case (Jugador2=='Tijera'&& Jugador1=='Papel'):
    return resultado= 'Gana Jugador2';
    break;  
    case (Jugador2=='Papel' && Jugador1=='Piedra'):
    return resultado= 'Gana Jugador2';
    break;
    default:
        return resultado='Valores Erroneos';
    }
}
    console.log(juego());
