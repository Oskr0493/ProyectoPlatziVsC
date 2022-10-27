
const form = document.querySelector("#Form"); 
const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const buttom=document.querySelector('#BtnCalcular');
const Presult=document.querySelector('#result');

/*form.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("virus")
}
*/


buttom.addEventListener('click', btnOnclick)

function btnOnclick(){
   const sumresul= input1.value + input2.value;
   Presult.innerText="Resutados: " +  sumresul;
}
/*
console.log({
    h1,
    p,
    Parrafo,
    Pid,
    input
});

h1.innerHTML="Novato <br> DOM";
h1.innerText="Novato <br> DOM";
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');

h1.classList.add=('Verde');
h1.classList.remove=('rojo'); */



