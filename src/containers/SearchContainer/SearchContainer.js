import React, { PropTypes } from 'react';

// Importamos los componentes
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';


// Actions
import { startSearch, successSearch } from '../../actions/actions';

import { connect } from 'react-redux';


/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {

  constructor(props) {
    super(props);

    // Binds
    this.onSubmit = this.onSubmit.bind(this);
  }


  /**
   * Este método actua como callback del evento onSubmit del formulario.
   * Recibe como parámetro el campo que debe de buscar.
   */
  onSubmit = value => {
    // Lanzamos la accion!
    this.props.dispatch(startSearch(value));
    // Realizamos la petición a la API
    fetch(`https://api.github.com/search/repositories?q=${ value }`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.props.dispatch(successSearch(res.items));
      })
      .catch(err => {
        // Mostramos el error por consola
        console.log(err);
      })
  }


  /**
   * Render the SearchContainer component
   */
  render() {
    return <section>
      <SearchForm onSubmit={ this.onSubmit } search={ this.props.search } />
      <RepositoryList data={ this.props.results } total={ this.props.results.length }
        loading={ this.props.loading } search={ this.props.search }
        queried={ this.props.queried } />
    </section>
  }
}

const mapStateToProps = state => {

  let { search, loading, results, queried } = state;
  return { search, loading, results, queried };
}

// Exportamos
export default connect(mapStateToProps)(SearchContainer);
