import React, { Component } from 'react';

import AppContext from './app-context';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

import Header from './js/Header';
import Game from './js/Game';

import originalGameslist from './data/Games.json';

class App extends Component {
	// Default values

  state = {
    gameslist: originalGameslist,
    filter: {
        'sort': 'all',
        'search': ''
    }
}

	render() {
    const self = this;

		function filterHandler( filter ) {
			// // Copy the original list
      let filteredGameslist = [...originalGameslist];

      // Merge existing with new
      let filters = {...self.state.filter, ...filter};

      // Filter (Sort)
      // ------------------------

      // All
      // Do nothing (original list);

      // New
      if( filters.sort && 'new' === filters.sort ) {
        filteredGameslist = filteredGameslist.sort((a,b) => {
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        });
      }

      // Top
      if( filters.sort && 'top' === filters.sort ) {
        filteredGameslist = filteredGameslist.sort((a,b) => {
          return a.popularity - b.popularity;
        });
      }

      // Freetext search
      if( filters.search && filters.search.length > 0 ) {
        filteredGameslist = filteredGameslist.filter( game => game.title.toLowerCase().indexOf( filters.search ) > -1 )
      }

      self.setState({filter: filters});
			self.setState({gameslist: filteredGameslist});
    }

    let gameslist = [...this.state.gameslist].map(game => {
      return (
        <Game key={game.id} game={game} />
      );
    });

    return (
			<AppContext.Provider value={{
          filter: this.state.filter,
          gameslist: this.state.gameslist
				}}>
        <Container>
          <Row>
            <Col>
              <Header onchange={filterHandler} filter={this.state.filter} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="games-list">
                {gameslist}
              </div>
            </Col>
          </Row>
        </Container>
			</AppContext.Provider>
    );
  }
}

export default App;
