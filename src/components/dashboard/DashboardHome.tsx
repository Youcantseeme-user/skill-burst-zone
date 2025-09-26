import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Calendar, 
  Trophy, 
  BookOpen, 
  Target,
  Zap,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const recentCourses = [
    { name: "HTML Fundamentals", progress: 75, category: "Web Development" },
    { name: "React Basics", progress: 45, category: "Web Development" },
    { name: "Problem Solving", progress: 60, category: "Aptitude" },
  ];

  const achievements = [
    { title: "Week Warrior", description: "7 day learning streak", icon: Calendar },
    { title: "Quiz Master", description: "Scored 100% on 5 quizzes", icon: Trophy },
    { title: "Fast Learner", description: "Completed 3 modules this week", icon: Zap },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
          <p className="text-muted-foreground mt-1">Ready to continue your learning journey?</p>
        </div>
        <Button className="glow-effect">
          <Link to="/dashboard/tasks">Today's Challenge</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Calendar className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">12 days</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Active</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 completed this week</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quiz Score</CardTitle>
            <Target className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Average this month</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#23</div>
            <p className="text-xs text-muted-foreground">In your region</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Continue Learning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCourses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{course.name}</h4>
                    <p className="text-sm text-muted-foreground">{course.category}</p>
                  </div>
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              <Link to="/dashboard/courses">View All Courses</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <achievement.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Achievements
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col">
              <Clock className="w-6 h-6 mb-2" />
              Take Daily Quiz
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <TrendingUp className="w-6 h-6 mb-2" />
              Check Progress
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <Trophy className="w-6 h-6 mb-2" />
              View Leaderboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;