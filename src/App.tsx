import { RouterProvider } from 'react-router-dom'
import routeConfigurations from './routes/routeConfigurations'
import './App.css'

function App() {
  return (
    <RouterProvider router={routeConfigurations} />
  )
}

export default App
