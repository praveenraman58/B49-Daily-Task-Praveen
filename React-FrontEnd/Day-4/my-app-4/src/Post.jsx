import React from 'react'
import Like from './Like'

function post(props) {
  return (
    <>
<h1>{props.name}</h1>
<Like/>
<Comment/>
    </>
  )
}

export default post