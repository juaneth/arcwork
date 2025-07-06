import { Outlet, redirect } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import Titlebar from "./components/titleBar";
import { AppSidebar } from "./components/ui/app-sidebar";

import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, []);

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
