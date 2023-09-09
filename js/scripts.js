/* ------------------LANGUAGE PAGE----------------------- */

const languageSelect = document.getElementById("languageSelect");

        languageSelect.addEventListener("change", function () {
            const selectedLanguage = languageSelect.value;
            
            if (selectedLanguage === "en") {
                // Si se selecciona inglés, redirige a index.html en inglés
                window.location.href = "index.html";
            } else if (selectedLanguage === "es") {
                // Si se selecciona español, redirige a index.html en español
                window.location.href = "es/index.html";
            }
        });