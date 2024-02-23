import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Login = lazy(() => import("./Components/Login/Login"));
const Product = lazy(() => import("./Components/ProductPages/Products"));
const PrivateRoute = lazy(() => import("./Components/AppLayout/PrivateRoute"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/products" />}></Route>
        <Route path="/dashboard" Component={PrivateRoute}>
          <Route path="products" Component={Product}></Route>
        </Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
