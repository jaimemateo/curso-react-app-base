import React, { PropTypes } from 'react';

import RepositoryRow from '../RepositoryRow';
import HintMessage from '../HintMessage';
/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
  }
  /**
   * Render the RepositoryList component
   */
   renderMessage() {
     let text = "", l = this.props.repositories.length;

     text = 'Holi';
     return <HintMessage>{text}</HintMessage>;
   }

   renderTable() {
     if (this.props.repositories.length === 0) {return null;}

     return
   }


  render() {
    return <section className="RepositoryList">
      {this.renderMessage() }
      { this.renderTable() }
    </section>;
  }
}

// Export the class
export default RepositoryList;
