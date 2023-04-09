

// declaro variables, y el window.pageYoffset para medir el scroll
let ubicacionPrincipal = window.pageYOffset;
let header = document.getElementsByClassName("header");
let menu = document.querySelector("#menu");


AOS.init();

// Agrego un evento de scroll y una funcion, para que oculte el menu 
window.addEventListener("scroll", function(){
    let desplazamiento = window.pageYOffset;

    // Condicional si es mayor que este en 0px y se muestre, sino que se oculte
    if (ubicacionPrincipal >= desplazamiento) {
        this.document.getElementsByTagName("header")[0].style.top = "0px"
        this.document.getElementsByClassName("box-model")[0].style.top = "10px"
    }else{
        this.document.getElementsByTagName("header")[0].style.top = "-100px"
        this.document.getElementsByClassName("box-model")[0].style.top = "-100px"
    }

    ubicacionPrincipal = desplazamiento
})


// Agrego variable y traigo a nav, y una funcion para mostrar el menu al hacer click, agrego style

let nav = document.querySelector(".nav__list");

document.querySelector("#menu").addEventListener("click", function(){
    nav.classList.toggle("capa__menu");
    // nav.querySelector(".box-model").classList.toggle("close");

})


// Agrego variables para que se cierre el menu cada vez que se quiera visitar una sección 