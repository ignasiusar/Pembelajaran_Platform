const toggle = document.getElementById("menu-toggle");

const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", function(){

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        toggle.textContent="✕";

    }else{

        toggle.textContent="☰";

    }

});
