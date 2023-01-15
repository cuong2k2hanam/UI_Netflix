import "./App.css";
import { Sidebar, Topbar } from "./components";
import {
  Home,
  NewProduct,
  NewUser,
  Product,
  ProductList,
  User,
  UserList,
} from "./components/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <div className="others">other pages</div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
