import { Outlet } from "react-router";
import { DashboardNavbar } from "@/shared/common";
import { DashboardSidebar } from "@/shared/common";

const DashboardLayout = () => {
  return (
    <main className="flex">
      <DashboardSidebar />
      <div className="w-full">
        <DashboardNavbar />
        <div className="px-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
