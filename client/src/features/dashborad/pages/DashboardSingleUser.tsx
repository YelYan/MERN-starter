import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardList from "../components/dashboard-home/CardList";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserForm from "../components/dashboard-single-user/UserForm";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "../components/dashboard-home/AppLineChart";

const DashboardsingleUser = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USERS BADGE CONTAINER */}
          <div className="bg-accent rounded-lg p-4">
            <h2 className="text-lg font-semibold dark:text-white">
              User Badges
            </h2>

            <div className="flex items-center gap-4 mt-3">
              {/* VERIFIED BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={"30px"}
                    className="text-white rounded-full bg-blue-500/70 dark:bg-blue-500/50 cursor-pointer border border-blue-500/30 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h1 className="text-md font-bold">User Verified!</h1>
                  <p>This user has been verified by admin!</p>
                </HoverCardContent>
              </HoverCard>
              {/* ADMIN BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={"30px"}
                    className="text-white rounded-full bg-green-500/70 dark:bg-green-500/50 cursor-pointer border border-blue-500/30 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h1 className="text-md font-bold">Admin</h1>
                  <p>
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              {/* AWARD BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={"30px"}
                    className="text-white rounded-full bg-yellow-500/70 dark:bg-yellow-500/50 cursor-pointer border border-blue-500/30 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h1 className="text-md font-bold">Awarded</h1>
                  <p>This user has been awarded for their contributions.</p>
                </HoverCardContent>
              </HoverCard>
              {/* Popular BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={"30px"}
                    className="text-white rounded-full bg-orange-500/70 dark:bg-orange-500/50 cursor-pointer border border-blue-500/30 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h1 className="text-md font-bold">Popular</h1>
                  <p> This user has been popular in the community.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-accent rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold dark:text-white">
                User Information
              </h2>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"white"}>Edit User</Button>
                </SheetTrigger>
                <UserForm type="edit" onSubmit={(data) => console.log(data)} />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>john.doe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge variant={"custom"} className="text-white font-extrabold">
                  Admin
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-accent rounded-lg p-4">
            <CardList title="Recent transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTINER */}
          {/* USER CARD CONTAINER */}
          <div className="bg-accent p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptas distinctio ab ipsa commodi fugiat labore quos veritatis
              cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam
              in, quis quia.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-accent p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardsingleUser;
