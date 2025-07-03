import React from "react";
import ReactDOM from "react-dom/client";

import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import { ThemeProvider } from "@/components/theme-provider";

import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";

import { SidebarProvider } from "./components/ui/sidebar";
import Titlebar from "./components/titleBar";
import { AppSidebar } from "./components/ui/app-sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main className='flex bg-background relative text-foreground h-screen mt-8'>
        <SidebarProvider>
          <Titlebar></Titlebar>
          <AppSidebar />
          <RouterProvider router={router} />
        </SidebarProvider>
      </main>
    </ThemeProvider>
  </ClerkProvider>
);
