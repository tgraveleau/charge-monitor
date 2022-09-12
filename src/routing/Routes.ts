interface Route {
  path: string
  label: string
}
export const Routes: {[name: string]: Route} = {
  home: {
    path: '/',
    label: 'Home'
  },
  station: {
    path: '/stations',
    label: 'Bornes'
  },
  vehicle: {
    path: '/vehicles',
    label: 'Véhicules'
  }
}
