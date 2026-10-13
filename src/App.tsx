import { Link, Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Registered from "./pages/Registered";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <header className="auth-header">
        <Link to="/" className="brand">Daily Store</Link>
      </header>
      <main className="auth-content">
        <Outlet />
      </main>
    </div>
  );
}

function StoreLayout() {
  return (
    <div className="store-layout">
      <header className="site-header">
        <Link to="/products" className="brand">Daily Store</Link>
        <nav aria-label="Main navigation">
          <NavLink to="/products">Products</NavLink>
          <Link to="/">Sign in</Link>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registered" element={<Registered />} />
      </Route>
      <Route element={<StoreLayout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
