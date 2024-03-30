console.log(tempData);
 // Crear una lista no ordenada (ul) para mostrar las películas
 const listaPeliculas = document.createElement("div");
 //listaPeliculas.setAttribute(id, "containerMovies");
  
 // Recorrer el arreglo de objetos y crear elementos li para cada película
 tempData.forEach((pelicula) => {
   const item = document.createElement("div");
   item.innerHTML = `
     <h2>${pelicula.title}</h2>
     <img src="${pelicula.poster}" alt="${pelicula.title} Poster" width="150">
     <p>Director: ${pelicula.director}</p>
     <p>Duración: ${pelicula.duration}</p>
     <p>Género: ${pelicula.genre.join(", ")}</p>
     <p>Calificación: ${pelicula.rate}</p>
     <p>Año: ${pelicula.year}</p>
   `;
   listaPeliculas.appendChild(item);
 });
 
 // Agregar la lista al DOM (por ejemplo, dentro de un div con id "peliculas")
 document.getElementById("containerDivsMovies").appendChild(listaPeliculas);
