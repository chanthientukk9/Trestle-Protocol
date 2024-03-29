import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StatsPage from "../pages/StatsPage";
import ComingSoonPage from "../pages/ComingSoonPage";
import StakingPage from "../pages/StakingPage";
import MyRewardsPage from "../pages/MyRewardsPage";

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
    element: <StakingPage />,
  },
  {
    path: "/my-rewards",
    element: <MyRewardsPage />,
  },
]);

export default routeConfigurations;
