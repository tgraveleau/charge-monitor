import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../routing/Routes'

export const Nav: React.FC = () => {
  return (
    <nav>
        <h1>Nav</h1>
        <Link to={Routes.station}>Bornes</Link>
        <Link to={Routes.vehicle}>Véhicules</Link>
      </nav>
  )
}
