import type { RoutesT } from "../../../types/route.type";
import {
  LazyDashboardProject,
  LazyDashboard,
  LazyDashboardUsers,
  LazyDashboardProducts,
  LazyDashboardSingleUser,
  LazyDashboardPayment,
} from "../lazy";

const adminRoutes: RoutesT = [
  {
    key: "admin-dashboard",
    path: "/dashboard",
    element: <LazyDashboard />,
  },
  {
    key: "admin-dashboard-user",
    path: "/dashboard/users",
    element: <LazyDashboardUsers />,
  },
  {
    key: "admin-dashboard-user",
    path: "/dashboard/users/:id",
    element: <LazyDashboardSingleUser />,
  },
  {
    key: "admin-dashboard-product",
    path: "/dashboard/products",
    element: <LazyDashboardProducts />,
  },
  {
    key: "admin-dashboard-payment",
    path: "/dashboard/payment",
    element: <LazyDashboardPayment />,
  },
  {
    key: "admin-dashboard-project",
    path: "/dashboard/projects",
    element: <LazyDashboardProject />,
  },
];

export default adminRoutes;
