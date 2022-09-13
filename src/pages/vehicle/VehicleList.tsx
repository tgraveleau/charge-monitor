import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { vehicleList } from '../../api/vehicle'
import { CardData } from '../../design-system/molecules'
import { Vehicle } from '../../models/Vehicle'

export const dummyDataZoe = [
  { x: 'jan', y: 1100 },
  { x: 'fev', y: 400 },
  { x: 'mar', y: 500 },
  { x: 'avr', y: 600 },
  { x: 'mai', y: 900 },
  { x: 'juin', y: 270 },
  { x: 'juil', y: 820 },
  { x: 'aou', y: 250 },
  { x: 'sep', y: 570 },
  { x: 'oct', y: 280 },
  { x: 'nov', y: 290 },
  { x: 'dec', y: 350 }
]
export const dummyDataE208 = [
  { x: 'jan', y: 510 },
  { x: 'fev', y: 800 },
  { x: 'mar', y: 900 },
  { x: 'avr', y: 500 },
  { x: 'mai', y: 1300 },
  { x: 'juin', y: 1600 },
  { x: 'juil', y: 1200 },
  { x: 'aou', y: 1250 },
  { x: 'sep', y: 1700 },
  { x: 'oct', y: 1280 },
  { x: 'nov', y: 1690 },
  { x: 'dec', y: 1350 }
]

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {error ?? <div>{error}</div>}
        </Grid>
        {vehicles.map(vehicle =>
          <Grid key={`vehicle-${vehicle.uuid}`} item xs={12} lg={6}>
            <CardData
              data={[{ id: vehicle.name, data: (vehicle.name === 'Zoé' ? dummyDataZoe : dummyDataE208) }]}
              title={`Consommation du véhicule ${vehicle.name}`}
              viewPath='#'
            />
          </Grid>)}
      </Grid>
    </div>
  )
}
