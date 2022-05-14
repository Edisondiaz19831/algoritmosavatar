function circulo(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("circulo");
}
function arriba(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("arriba");
}
function abajo(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("abajo");
}
function rectangulovertical(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("rectangulovertical");
}

function rectangulohorizontal(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("rectangulohorizontal");
}
function derecha(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("derecha");
}
function izquierda(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("izquierda");
}
function diagonalasuperior(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("diagonalasuperior");
}
function diagonalinferior(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("diagonalinferior");
}
function rombo(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("rombo");
}
function imagen(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("imagen");
}

function capturarDatos(){
    var nombre = document.getElementById("cNombres").value;
    var edad = document.getElementById("cEdad").value;
    var fecha = document.getElementById("cFecha").value;
    var genero = document.getElementById("cGenero").value;
    var email = document.getElementById("cEmail").value;
    var descripcion = document.getElementById("cDescripcion").value;
    var color = document.getElementById("cColor").value;


   var name =  document.getElementById("mNombres");
   var age  =  document.getElementById("mEdad");
   var date  =  document.getElementById("mFecha");
   var gender  =  document.getElementById("mGenero");
   var correo = document.getElementById("mEmail");
   var descrition=document.getElementById("mDescripcion");
 


name.textContent  = nombre;
age.textContent  = edad;
date.textContent  = fecha;
gender.textContent = genero;
correo.textContent=email;
descrition.textContent=descripcion;


var selector = document.getElementById("card-avatar");
//if (color == "rojo" ) {
    
    //selector.style.backgroundColor = "#cc1515";
    
//}
//else if (color=="azul"){
 //   selector.style.backgroundColor = "#cc1515";
//}
switch (color) {
    case "rojo":
        selector.style.backgroundColor = "#ff6347";
        break;
    case "azul":    
        selector.style.backgroundColor = "#00bfff";
        break;
        case "amarillo": 
        selector.style.backgroundColor = "	#ffd700";
        
}

var imgAvatar = document.getElementById("foto");

if (genero=="Masculino") {
    imgAvatar.src = "img/1.png";
} else if (genero =="Femenino"){
    imgAvatar.src = "img/3.png";
    }
    else {
    imgAvatar.src = "img/avatar.png";
    }
}

