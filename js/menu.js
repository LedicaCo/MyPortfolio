/* const toggler = document.querySelector('.btn');
toggler.addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('collapsed');
}); */

/* document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const verticalMenu = document.getElementById("verticalMenu");

    toggleButton.addEventListener("click", function () {
        if (verticalMenu.style.left === "-250px") {
            // Muestra el menú
            verticalMenu.style.left = "0";
        } else {
            // Oculta el menú
            verticalMenu.style.left = "-250px";
        }
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const verticalMenu = document.getElementById("verticalMenu");

    toggleButton.addEventListener("click", function () {
        const menuIcon = toggleButton.querySelector(".toggle");
        
        if (verticalMenu.style.left === "-250px") {
            // Muestra el menú
            verticalMenu.style.left = "0";
            toggleButton.style.left = "260px"; // Mueve el botón a la izquierda cuando el menú se muestra
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-menu"); // Cambia el ícono a una "X" (o el ícono que prefieras)
        } else {
            // Oculta el menú
            verticalMenu.style.left = "-250px";
            toggleButton.style.left = "20px"; // Mueve el botón a la izquierda cuando el menú se oculta
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-menu"); // Cambia el ícono de vuelta al ícono del menú
        }
    });
});


