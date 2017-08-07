// Comenzamos una nueva búsqueda
/* export const startSearch = ... */

// Retornamos los resultados
/* export const successSearch = ... */

export const search = value =>
  dispatch => {
    // Lanzamos la acción startSearch
    dispatch(startSearch(value));

    // Realizamos la búsqueda
    fetch(`https://api.github.com/search/repositories?q=${ value }`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        // Almacenamos el resultado en redux
        dispatch(successSearch(res.items));
      })
      .catch(err => {
        console.log(err);
      });
  }