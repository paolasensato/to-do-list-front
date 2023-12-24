import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/LoginPage"));

const MainLayout = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};

export default MainLayout;
