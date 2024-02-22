import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StatsPage from "../pages/StatsPage";

const routeConfigurations = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/stats",
    element: <StatsPage />,
  },
]);

export default routeConfigurations;
