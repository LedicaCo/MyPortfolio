
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const verticalMenu = document.getElementById("verticalMenu");
    const menuIcon = toggleButton.querySelector(".toggle");
    
    // Añade una variable para rastrear el estado del menú
    let menuIsOpen = false;

    toggleButton.addEventListener("click", function () {
        if (!menuIsOpen) {
            // Muestra el menú
            verticalMenu.style.left = "0";
            toggleButton.style.left = "260px"; // Mueve el botón a la izquierda cuando el menú se muestra
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-menu"); // Cambia el ícono a una "X" (o el ícono que prefieras)
            menuIsOpen = true;
        } else {
            // Oculta el menú
            verticalMenu.style.left = "-250px";
            toggleButton.style.left = "20px"; // Mueve el botón a la izquierda cuando el menú se oculta
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-menu"); // Cambia el ícono de vuelta al ícono del menú
            menuIsOpen = false;
        }
    });
});



