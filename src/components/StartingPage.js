import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const StartingPage = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div className="startingPage">
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>
        <div>
          <Button className="login-button" type="submit">
            {displayName}
          </Button>
        </div>
      </form>
    </div>
  )
}
