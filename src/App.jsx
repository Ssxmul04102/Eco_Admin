import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./admin/componentes/Sidebar";

import Users from "./admin/pages/Users";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Deliveries from "./admin/pages/Deliveries";

export default function App() {
  return (
    <Router>
      <div className="flex">
        {/* Solo una vez aquí */}
        <Sidebar />  

        <div className="flex-1 p-6">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/deliveries" element={<Deliveries />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
