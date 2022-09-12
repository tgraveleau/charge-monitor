import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav, Sidenav } from '../organisms'
import { MainContainer } from '../organisms/MainContainer'

export const Layout: React.FC = () => {
  return (
    <div>
      <Nav/>
      <Sidenav/>
      <MainContainer>
        <Outlet/>
      </MainContainer>
    </div>
  )
}
