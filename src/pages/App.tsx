import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../design-system/templates'
import { Routes as AppRoutes } from '../routing/Routes'
import { StationList } from './station/StationList'
import { VehicleList } from './vehicle/VehicleList'

function App (): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path={AppRoutes.station.path} element={<StationList />}/>
            <Route path={AppRoutes.vehicle.path} element={<VehicleList />}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
