import { DataTable } from "@/components/ui/data-table";
import { columns } from "../components/dashboard-payment/columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Payment } from "../components/dashboard-payment/columns";

const data: Payment[] = [
  {
    id: "1",
    status: "pending",
    email: "gg@gmail.com",
    amount: 200,
  },
  {
    id: "2",
    status: "processing",
    email: "dd@gmail.com",
    amount: 400,
  },
  {
    id: "3",
    status: "failed",
    email: "bb@gmail.com",
    amount: 730,
  },
  {
    id: "4",
    status: "success",
    email: "gg@gmail.com",
    amount: 2005,
  },
];

const DashboardPayment = () => {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Payment</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className="text-xl font-medium container">Payment Lists</h3>
      <div className="container py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DashboardPayment;
