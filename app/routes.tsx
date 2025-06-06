import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./routes/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]); 