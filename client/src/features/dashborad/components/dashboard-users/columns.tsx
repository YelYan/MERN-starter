import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import UserForm from "../dashboard-single-user/UserForm";

export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
  location: string;
  role: "Super Admin" | "Admin" | "Editor" | "Moderator" | "User";
  status: "Active" | "Inactive" | "Suspended";
  createdAt?: Date | string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return <div className="font-medium">{user.username}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const role = row.getValue("role") as User["role"];

      let variant: "default" | "secondary" | "outline" | "destructive" =
        "secondary";
      if (role === "Super Admin" || role === "Admin") {
        variant = "destructive";
      } else if (role === "Editor") {
        variant = "default";
      } else {
        variant = "outline";
      }

      return (
        <Badge variant={variant} className="capitalize">
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as User["status"];

      let statusColor;
      switch (status) {
        case "Active":
          statusColor = "bg-green-500/50 text-green-800 dark:text-white";
          break;
        case "Suspended":
          statusColor = "bg-red-500/50 text-red-800 dark:text-white";
          break;
        default:
          statusColor = "bg-yellow-500/50 text-yellow-800 dark:text-white";
      }

      return (
        <div
          className={cn(
            `p-1 rounded-full w-max text-xs font-medium px-3`,
            statusColor
          )}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            CreatedAt
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("createdAt") as string;

      // 2. Use moment() to parse the string and .format() to display it
      const formatted = moment(dateString).format("MMM D, YYYY");
      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Add User</DropdownMenuItem>
            <Sheet>
              <SheetTrigger asChild>
                <DropdownMenuItem>Edit User</DropdownMenuItem>
              </SheetTrigger>
              <UserForm type="edit" onSubmit={(data) => console.log(data)} />
            </Sheet>

            <DropdownMenuItem>
              <Link to={`/dashboard/users/${user.id}`}>View Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">
              Suspend User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
