import React from "react";
import ReactDOM from "react-dom/client";

import { ClerkProvider, useUser } from "@clerk/clerk-react";
import { ThemeProvider } from "@/components/theme-provider";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router";

import App from "./App";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/signin'>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ClerkProvider>
);
