 // Obtener el elemento select en la página actual
 const languageSelect = document.getElementById("languageSelect");

 // Escuchar el evento de cambio en el select
 languageSelect.addEventListener("change", function () {
     const selectedLanguage = languageSelect.value;

     if (selectedLanguage === "en") {
         // Si se selecciona inglés, redirige al index.html en el directorio raíz
         window.location.href = "../index.html";
     } else if (selectedLanguage === "es") {
         // Si se selecciona español, redirige a index.html en español
         window.location.href = "index.html";
     }
 });