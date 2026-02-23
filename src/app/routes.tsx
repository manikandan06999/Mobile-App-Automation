import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import CreateAppPage from "@/pages/dashboard/CreateAppPage";
import MainDashboard from "@/pages/dashboard/MainDashboard";
import AppRecord from "@/pages/dashboard/AppRecord";
import TokensPage from "@/pages/dashboard/TokensPage";
import BillingPage from "@/pages/dashboard/BillingPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";
import SettingsPage from "@/pages/dashboard/SettingsPage";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔥 DASHBOARD LAYOUT */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* DEFAULT PAGE */}
          <Route index element={<CreateAppPage />} />

          <Route path="main" element={<MainDashboard />} />
          <Route path="apps" element={<CreateAppPage />} />
          <Route path="records" element={<AppRecord />} />
          
          <Route path="/dashboard/tokens" element={<TokensPage />} />
          <Route path="/dashboard/billing" element={<BillingPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
<Route path="/dashboard/settings" element={<SettingsPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}