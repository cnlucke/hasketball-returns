import React from 'react'
import { selectPlayer } from '../actions'
import { connect } from 'react-redux'

const Player = (props) => {
  return (
    <div onClick={() => props.selectPlayer(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}

export default connect(null, { selectPlayer })(Player)
