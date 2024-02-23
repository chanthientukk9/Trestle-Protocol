import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StatsPage from "../pages/StatsPage";
import ComingSoonPage from "../pages/ComingSoonPage";

const routeConfigurations = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/stats",
    element: <StatsPage />,
  },
  {
    path: "/bridge",
    element: <ComingSoonPage />,
  },
  {
    path: "/staking",
    element: <ComingSoonPage />,
  },
  {
    path: "/my-rewards",
    element: <ComingSoonPage />,
  },
]);

export default routeConfigurations;
