import { RouterProvider } from "react-router-dom";
import routeConfigurations from "./routes/routeConfigurations";

function App() {
  return <RouterProvider router={routeConfigurations} />;
}

export default App;
