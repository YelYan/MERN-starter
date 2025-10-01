import { DataTable } from "@/components/ui/data-table";
import { columns } from "../components/dashboard-users/columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { User } from "../components/dashboard-users/columns";

const data: User[] = [
  {
    id: "u101",
    username: "alex.gale",
    email: "alex.gale@corp.com",
    phone: "+1 555-1234",
    location: "Seattle, WA",
    status: "Active",
    role: "Super Admin",
    createdAt: "2023-01-15",
  },
  {
    id: "u102",
    username: "bella_swan",
    email: "bella.swan@corp.com",
    phone: "+44 207-9460",
    location: "London, UK",
    status: "Active",
    role: "User",
    createdAt: "2023-03-22",
  },
  {
    id: "u103",
    username: "charlie_z",
    email: "charlie@zonk.io",
    phone: "+33 1-8901-2345",
    location: "Paris, FR",
    status: "Suspended",
    role: "Editor",
    createdAt: "2024-05-01",
  },
  {
    id: "u104",
    username: "david.king",
    email: "dking@solutions.com",
    phone: "+49 30-7890-123",
    location: "Berlin, DE",
    status: "Inactive",
    role: "Admin",
    createdAt: "2022-11-05",
  },
  {
    id: "u105",
    username: "emily.rose",
    email: "e.rose@mail.net",
    phone: "+353 1-3456-789",
    location: "Dublin, IE",
    status: "Active",
    role: "Moderator",
    createdAt: "2023-07-19",
  },
  {
    id: "u106",
    username: "frankie.j",
    email: "frankiej@global.org",
    phone: "+61 2-9876-5432",
    location: "Sydney, AU",
    status: "Active",
    role: "User",
    createdAt: "2024-02-10",
  },
  {
    id: "u107",
    username: "greta_t",
    email: "greta.t@data.co",
    phone: "+46 8-1020-3040",
    location: "Stockholm, SE",
    status: "Active",
    role: "Editor",
    createdAt: "2023-09-01",
  },
  {
    id: "u108",
    username: "helen_wu",
    email: "hwu@creative.dev",
    phone: "+86 10-5678-9012",
    location: "Shanghai, CN",
    status: "Inactive",
    role: "User",
    createdAt: "2022-08-28",
  },
  {
    id: "u109",
    username: "ian.mccoy",
    email: "ian.m@research.edu",
    phone: "+1 212-987-6543",
    location: "New York, NY",
    status: "Active",
    role: "Admin",
    createdAt: "2024-04-12",
  },
  {
    id: "u110",
    username: "jessica.a",
    email: "jessica@tech.com",
    phone: "+55 11-2345-6789",
    location: "São Paulo, BR",
    status: "Active",
    role: "Moderator",
    createdAt: "2023-12-03",
  },
  {
    id: "u111",
    username: "karen_p",
    email: "karenp@enterprise.io",
    phone: "+81 3-3456-7890",
    location: "Tokyo, JP",
    status: "Suspended",
    role: "User",
    createdAt: "2022-06-17",
  },
  {
    id: "u112",
    username: "leo_vance",
    email: "leo.vance@agency.com",
    phone: "+34 91-098-7654",
    location: "Madrid, ES",
    status: "Active",
    role: "Editor",
    createdAt: "2024-01-20",
  },
  {
    id: "u113",
    username: "maria_s",
    email: "maria.s@finance.net",
    phone: "+7 495-567-8901",
    location: "Moscow, RU",
    status: "Active",
    role: "Admin",
    createdAt: "2023-05-30",
  },
  {
    id: "u114",
    username: "nick_baker",
    email: "nickbaker@startup.co",
    phone: "+91 11-2345-6789",
    location: "Mumbai, IN",
    status: "Inactive",
    role: "User",
    createdAt: "2023-10-14",
  },
  {
    id: "u115",
    username: "olivia.d",
    email: "olivia.d@super.net",
    phone: "+1 617-112-3344",
    location: "Boston, MA",
    status: "Active",
    role: "Super Admin",
    createdAt: "2024-06-25",
  },
];

const DashboardUsers = () => {
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
              <BreadcrumbPage>Users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className="text-xl font-medium container">User Lists</h3>
      <div className="container py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DashboardUsers;
