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
   * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
   * la API.
   */
  stubData() {
    let repo = {
      full_name: 'My Repository',
      owner: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      stargazers_count: 10,
      forks_count: 5
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  onSubmit(value) {
    // Lanzamos
    this.props.dispatch(startSearch(value));

    setTimeout(() => {
      this.props.dispatch(successSearch(this.stubData()));
    }, 2000);
  }


  /**
   * Render the SearchContainer component
   */
  render() {
    return <main className="container">
      <SearchForm onSubmit={this.onSubmit} search={this.props.search} />
      <RepositoryList data={this.props.results} loading={this.props.loading} queried={this.props.queried} search={this.props.search} />
    </main>
  }
}

const mapStateToProps = state => {

  let { search, loading, results, queried } = state;
  return { search, loading, results, queried };
}

// Exportamos
export default connect(mapStateToProps)(SearchContainer);
