const defaultState = {
  teams: [],
  selectedPlayer: null
}

export default function(state = defaultState, action){
  switch (action.type) {
    case 'ADD_TEAMS':
      return {...state, teams: [...action.payload]}
    case 'SELECT_PLAYER':
      return {...state, selectedPlayer: action.payload}
    default:
      return {...state}
  }


}
