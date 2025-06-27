import "./App.css";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/ui/app-sidebar";
import Titlebar from "@/components/titleBar";
import { useUser } from "@clerk/react-router";
import { redirect } from "react-router";

function App() {
  const user = useUser();
  if (!user) {
    redirect("/signin");
  }

  return (
    <main className='flex bg-background relative text-foreground flex-col items-center justify-center h-screen mt-8'>
      <SidebarProvider>
        <Titlebar></Titlebar>
        <AppSidebar />
        <main></main>
      </SidebarProvider>
    </main>
  );
}

export default App;
