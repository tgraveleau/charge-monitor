import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Routes } from '../../routing/Routes'
import './Nav.scss'

export const Nav: React.FC = () => {
  return (
    <nav className='Nav'>
      <div className='Nav_title'>
        <Link to={Routes.home.path}>
          Charge monitor
        </Link>
      </div>
      <div className='Nav_links'>
        <ul>
          {[Routes.station, Routes.vehicle].map(route =>
            <li key={`menu-${route.path}`}>
              <NavLink to={route.path} className={({ isActive }) => isActive ? 'active' : ''} >
                {route.label}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
