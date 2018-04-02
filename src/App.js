import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import {getTeams} from './actions'


class App extends Component {

  componentDidMount(){
    this.props.getTeams(gamesData.teams)
  }

  handleSelectPlayer = (player) => {
    this.setState({
      selectedPlayer: player
    })
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList teams={this.props.teams} />
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams,
    selectedPlayer: state.selectedPlayer,
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     getTeams: (teams) => {
//       dispatch(getTeams(teams))
//     }
//   }
// }

export default connect(mapStateToProps, { getTeams })(App);
