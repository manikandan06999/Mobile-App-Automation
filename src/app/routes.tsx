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
import GoogleSuccess from "@/components/common/GoogleSuccess";
import AdminDashboard from "@/pages/AdminDashboard";

import AdminLayout from "@/pages/admin/AdminLayout";
import AdminUsers from "@/pages/admin/Users";
import AdminPayments from "@/pages/admin/Payments";
import AdminAnalytics from "@/pages/admin/Analytics";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/google-success" element={<GoogleSuccess />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* 🔥 ADMIN LAYOUT */}
<Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="users" element={<AdminUsers />} />
  <Route path="payments" element={<AdminPayments />} />
  <Route path="analytics" element={<AdminAnalytics />} />
</Route>


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