import { Outlet } from "react-router";
import DashboardNavbar from "./DashboardNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="w-full">
        <DashboardNavbar />
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
