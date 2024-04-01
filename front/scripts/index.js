console.log(tempData);
 // Crear un div para mostrar las películas
 const listaPeliculas = document.createElement("div");
 listaPeliculas.classList.add("containerDivsMovies");
  
// Recorrer el arreglo de objetos y crear elementos li para cada película
tempData.forEach((pelicula) => {
  const item = document.createElement("div");
  item.classList.add("cardMovie");
  const {title, year, director, duration, genre, rate, poster} = pelicula
  item.innerHTML = `
    <h2>${title}</h2>
    <img src="${poster}" alt="${title} Poster" width="150">
    <p>Director: ${director}</p>
    <p>Duración: ${duration}</p>
    <p>Género: ${genre.join(", ")}</p>
    <p>Calificación: ${rate}</p>
    <p>Año: ${year}</p>
  `;
  listaPeliculas.appendChild(item);
});
 
 // Agregar la lista al DOM (por ejemplo, dentro de un div con id "peliculas")
 document.getElementById("containerMovies").appendChild(listaPeliculas);
