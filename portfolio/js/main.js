// EFECTO TYPING PARA EL TITULO
// Seleccionar el elemento span dentro del h1 para mostrar el texto dinámico
const dynamicText = document.querySelector("h1 span");

// Array de palabras para el efecto typing
const words = ["Desarrollador Web", "Java lover", "Ciclista"];

// Variables para controlar el estado del efecto typing
let wordIndex = 0; // Variable para controlar el índice de la palabra actual
let charIndex = 1; // Variable para controlar el índice del caracter actual en la palabra
let isDeleting = false; // Variable para controlar si se está eliminando el texto

// Función para el efecto typing
const typeEffect = () => {
    const currentWord = words[wordIndex]; // Obtener la palabra actual
    const currentChar = currentWord.substring(0, charIndex); // Obtener el substring de la palabra hasta el caracter actual
    dynamicText.textContent = currentChar; // Actualizar el contenido del span con el substring
    dynamicText.classList.add("stop-blinking"); // Agregar la clase para detener el parpadeo del cursor

    if (!isDeleting && charIndex < currentWord.length) {
        // Si no se está eliminando y el índice de caracteres es menor que la longitud de la palabra, avanzar al siguiente caracter
        charIndex++;
        setTimeout(typeEffect, 200); // Llamar a la función nuevamente después de un retraso
    } else if (isDeleting && charIndex > 0) {
        // Si se está eliminando y el índice de caracteres es mayor que 0, retroceder al caracter anterior
        charIndex--;
        setTimeout(typeEffect, 100); // Llamar a la función nuevamente después de un retraso
    } else {
        // Si se ha completado la palabra o se ha eliminado completamente, cambiar el estado de eliminación y avanzar a la siguiente palabra
        isDeleting = !isDeleting; // Cambiar el estado de eliminación
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex; // Avanzar a la siguiente palabra si no se está eliminando, o mantener la misma palabra si se está eliminando
        dynamicText.classList.remove("stop-blinking"); // Eliminar la clase para reanudar el parpadeo del cursor
        setTimeout(typeEffect, 1500); // Llamar a la función nuevamente después de un retraso
    }
}

typeEffect(); // Llamar a la función para iniciar el efecto typing

