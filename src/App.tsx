import { Outlet, redirect } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import Titlebar from "./components/titleBar";
import { AppSidebar } from "./components/ui/app-sidebar";

import { useUser } from "@clerk/clerk-react";

export default function App() {
  const user = useUser();

  console.log(user);

  if (!user.isSignedIn) {
    console.log("Not Signed in");
    redirect("/signin");
  }

  return (
    <main className='flex bg-background relative text-foreground h-screen mt-8'>
      <SidebarProvider>
        <Titlebar></Titlebar>
        <AppSidebar />
        <Outlet></Outlet>
      </SidebarProvider>
    </main>
  );
}
