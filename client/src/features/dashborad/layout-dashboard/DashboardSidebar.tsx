import {
  Home,
  Inbox,
  ShoppingCart,
  Settings,
  User2,
  ChevronUp,
  ChevronDown,
  Plus,
  Projector,
  MoreHorizontal,
  Minus,
  ChevronRight,
  Pencil,
  Paperclip,
  User,
  CircleDollarSign,
} from "lucide-react";
import { Link } from "react-router";
import LOGO from "/vite.svg";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroupAction,
  SidebarMenuBadge,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "User",
    url: "/dashboard/users",
    icon: User,
  },
  {
    title: "Product",
    url: "/dashboard/products",
    icon: ShoppingCart,
  },
  {
    title: "Payment",
    url: "/dashboard/payment",
    icon: CircleDollarSign,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "/dashboard-settings",
    icon: Settings,
  },
];

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="bg-accent">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to={"/dashboard"}>
                <img width={30} height={30} src={LOGO} alt="" />
                <span>YanDev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* application */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* product  */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Products
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* projects */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/dashboard"}>
                    <Projector /> See All Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/dashboard"}>
                    <Plus /> Add project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Home />
                    <span>Project actions</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                      <span>Edit Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* nested sidebar */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/dashboard"}>
                    <Projector /> See All Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/dashboard"}>
                    <Plus /> Add project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Home />
                    <span>Project actions</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                      <span>Edit Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
              {/* nested */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/dashboard"}>
                    <Projector /> Projects
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link to={"/dashboard"}>
                        <Minus /> Update project
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link to={"/dashboard"}>
                        <Plus /> Add Category
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* collapsible nested sidebar */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton asChild>
                <Link to={"/dashboard"}>
                  Collapsible sidebar sub menu
                  <ChevronRight
                    className="ml-auto transition-transform duration-200 
                       group-data-[state=closed]/collapsible:rotate-0 
                       group-data-[state=open]/collapsible:rotate-90"
                  />
                </Link>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {/* 1. Add New Product */}
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>
                    <Plus />
                    <Link
                      to={"/dashboard/products/add"}
                      className="block w-full"
                    >
                      Add New Product
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>

                {/* 2. Edit/View Products */}
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>
                    <Pencil />
                    <Link
                      to={"/dashboard/products/view"}
                      className="block w-full"
                    >
                      View/Edit Products
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>

                {/* 3. Delete/Manage Stock (Often combined with Edit/View) */}
                <SidebarMenuSubItem>
                  <SidebarMenuButton>
                    <Paperclip />
                    <Link
                      to={"/dashboard/products/stock"}
                      className="block w-full"
                    >
                      Manage Stock/Delete
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  John Doe
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
