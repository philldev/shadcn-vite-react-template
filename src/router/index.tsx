import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/pages/root-layout";
import { HomePage } from "@/pages/home";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
]);
