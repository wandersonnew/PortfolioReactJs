import { createBrowserRouter } from "react-router-dom";

import Index from "./Index";
import Mensagem from "./components/Mensagem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/mensagem",
      element: <Mensagem />,
    },
]);

export default router;