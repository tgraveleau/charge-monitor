import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import App from './pages/App'
import { StationList } from './pages/station/StationList'
import { VehicleList } from './pages/vehicle/VehicleList'
import { Routes as AppRoutes } from './routing/Routes'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={AppRoutes.station} element={<StationList />}/>
          <Route path={AppRoutes.vehicle} element={<VehicleList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
