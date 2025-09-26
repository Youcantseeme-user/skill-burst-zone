import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  BarChart3, 
  BookOpen, 
  CheckSquare, 
  Trophy,
  Calendar
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: User, label: "Profile", path: "/dashboard/profile" },
    { icon: BarChart3, label: "Progress", path: "/dashboard/progress" },
    { icon: BookOpen, label: "Courses", path: "/dashboard/courses" },
    { icon: CheckSquare, label: "Daily Tasks", path: "/dashboard/tasks" },
    { icon: Trophy, label: "Leaderboard", path: "/dashboard/leaderboard" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-card border-r border-border h-full">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-gradient">SkillSprint</span>
        </Link>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-nav-item ${isActive(item.path) ? 'active' : ''}`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="space-y-4">
            <div className="bg-success/10 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-success">Current Streak</span>
                <Calendar className="w-4 h-4 text-success" />
              </div>
              <div className="text-2xl font-bold text-success mt-1">12 days</div>
            </div>

            <div className="bg-primary/10 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">Level</span>
                <Trophy className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mt-1">Gold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;