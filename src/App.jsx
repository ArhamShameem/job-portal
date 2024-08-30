import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayouts from "./layouts/app-layouts";
import LandingPage from "./pages/landing-page";
import Onboarding from "./pages/onboarding";
import MyJobs from "./pages/my-jobs";
import JobListing from "./pages/job-listing";
import PostJobs from "./pages/post-job";
import SavedJobs from "./pages/saved-jobs";
import { ThemeProvider } from "@/components/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayouts />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <LandingPage />,
      },
      {
        path: "/post-job",
        element: <PostJobs />,
      },
      {
        path: "/saved",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />

  </ThemeProvider>
  );
}

export default App;
