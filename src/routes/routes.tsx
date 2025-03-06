import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from '../components/Menu.tsx'
import Offline from "../components/Offline.tsx";
import PdfToImage from "../components/PdfToImage.tsx"


const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          {
            index: true,
            element: <Menu />,
          },
          {
            path: "menu",
            element: <Menu />,
          },
          {
            path: "offline",
            element: <Offline />,
          },
          {
              path: "menu_pdf",
              element: <PdfToImage pdfFile="/menu.pdf" />
          }
      ],
  },
]);

export default router
