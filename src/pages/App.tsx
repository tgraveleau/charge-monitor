import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Routes as AppRoutes } from '../routing/Routes'

function App (): React.ReactElement {
  return (
    <div className="App">
      <nav>
        <Link to={AppRoutes.station}>Bornes</Link>
        <Link to={AppRoutes.vehicle}>Véhicules</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
