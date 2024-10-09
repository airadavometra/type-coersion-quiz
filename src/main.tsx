import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/reset.css";
import { Layout } from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <div>TODO: Quiz page</div>
      </Layout>
    ),
  },
  {
    path: "/cheatsheet",
    element: (
      <Layout>
        <div>TODO: Cheat sheet page</div>
      </Layout>
    ),
  },
  {
    path: "/leaderboard",
    element: (
      <Layout>
        <div>TODO: Leaderboard page</div>
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <div>TODO: 404 page</div>
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
