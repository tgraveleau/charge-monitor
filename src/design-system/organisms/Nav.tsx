import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../routing/Routes'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import './Nav.scss'

export const Nav: React.FC = () => {
  const navigate = useNavigate()
  return (
    <AppBar className='Nav'>
        <Toolbar>
            <Box className='Nav_Title'>
                <Typography variant='h5'>Nav</Typography>
            </Box>
            <Box className='Nav_Links'>
            {[Routes.station, Routes.vehicle].map(route =>
                <Button key={route.label} onClick={() => navigate(route.path)}>
                {route.label}
                </Button>
            )}
            </Box>
        </Toolbar>
    </AppBar>
  )
}
