export function getTeams(teams) {
  return {
    type: 'ADD_TEAMS',
    payload: teams
  }
}

export function selectPlayer(player) {
  return {
    type: 'SELECT_PLAYER',
    payload: player
  }
}
