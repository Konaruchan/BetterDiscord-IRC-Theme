// Mapeo de colores retro (modificable según necesites)
const retroColors = ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'];

// Detectar nombres de usuario
const usernames = document.querySelectorAll('span[class*="username"]');

// Asignar colores aleatorios retro
usernames.forEach((username, index) => {
    // Asignar un color retro basado en el índice para más diversidad
    const colorClass = retroColors[index % retroColors.length];
    username.classList.add(colorClass);
});
