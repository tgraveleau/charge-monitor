import React, { useEffect, useState } from 'react'
import { vehicleList } from '../../api/vehicle'
import { Vehicle } from '../../models/Vehicle'
import { VehicleView } from './VehicleView'

export const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [error, setError] = useState<string>()
  useEffect(() => {
    vehicleList()
      .then(values => {
        setVehicles(values)
        setError(undefined)
      })
      .catch(reason => console.log(reason))
  }, [])

  return (
    <div className='VehicleList'>
      {error ?? <div>{error}</div>}
      {vehicles.map(vehicle => <VehicleView key={`vehicle-${vehicle.uuid}`} vehicle={vehicle}/>)}
    </div>
  )
}
