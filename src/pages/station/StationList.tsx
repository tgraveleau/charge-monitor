import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { stationList } from '../../api/station'
import { CardData } from '../../design-system/molecules'
import { Station } from '../../models/Station'
import { dummyDataZoe, dummyDataE208 } from '../vehicle/VehicleList'

export const StationList: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([])
  const [error, setError] = useState<string>()
  useEffect(() => {
    stationList()
      .then(values => {
        setStations(values)
        setError(undefined)
      })
      .catch(reason => console.log(reason))
  }, [])

  return (
    <div className='StationList'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {error ?? <div>{error}</div>}
        </Grid>
        {stations.map(station =>
          <Grid key={`station-${station.uuid}`} item xs={12} lg={6}>
            <CardData
              data={[{ id: 'E208', data: dummyDataE208 }, { id: 'Zoé', data: dummyDataZoe }]}
              title={`Consommation de la borne ${station.name}`}
              viewPath='#'
            />
          </Grid>)}
      </Grid>
    </div>
  )
}
