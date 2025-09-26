import Sidebar from "@/components/dashboard/Sidebar";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "@/components/dashboard/DashboardHome";
import Profile from "@/components/dashboard/Profile";
import Progress from "@/components/dashboard/Progress";
import Courses from "@/components/dashboard/Courses";
import DailyTasks from "@/components/dashboard/DailyTasks";
import Leaderboard from "@/components/dashboard/Leaderboard";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tasks" element={<DailyTasks />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;