const typed = new Typed(".typed", {
 /*  strings: [
    '<i class="abilities">JavaScript</i>',
    '<i class="abilities">TypeScript</i>',
    '<i class="abilities">React.Js</i>',
    '<i class="abilities">Redux.Js</i>',
    '<i class="abilities">Node.Js</i>',
    '<i class="abilities">Sequelize</i>',
  ], */
 
 

  stringsElement: '#text-string', //Id del elemento que contiene cadenas de texto a mostrrar.
  typeSpeed: 75, // velocidad en milisegundos para poner una letra.
  startDelay: 300, // Tiempo de retraso en iniciar la animación, aplica tambien cuando termina y vuleve iniciar.
  backSpeed: 75, // Velocidad en milisegundos para borrar una letra.
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una caena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings.
  loopCount: false, // Cantidad de veces a repetir el array, false = infinito.
  showCursor: true, // Mostrar cursosr palpitando.
  cursorChar: "|", // Caractér para el cursor.
  contentType: "html", // 'html' o 'null' para texto sin formato
});
