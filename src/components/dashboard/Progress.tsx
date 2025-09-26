import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { TrendingUp, Calendar, Target, BookOpen } from "lucide-react";

const Progress = () => {
  const weeklyData = [
    { day: "Mon", hours: 2.5, quizzes: 3 },
    { day: "Tue", hours: 1.8, quizzes: 2 },
    { day: "Wed", hours: 3.2, quizzes: 4 },
    { day: "Thu", hours: 2.1, quizzes: 2 },
    { day: "Fri", hours: 2.8, quizzes: 3 },
    { day: "Sat", hours: 4.0, quizzes: 5 },
    { day: "Sun", hours: 1.5, quizzes: 1 },
  ];

  const skillProgress = [
    { skill: "Web Development", completed: 12, total: 20, percentage: 60 },
    { skill: "App Development", completed: 5, total: 15, percentage: 33 },
    { skill: "Aptitude", completed: 8, total: 12, percentage: 67 },
    { skill: "DSA", completed: 3, total: 18, percentage: 17 },
  ];

  const streakData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    active: Math.random() > 0.3, // Simulate some activity
  }));

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Progress Tracking</h1>
        <div className="streak-badge">
          <Calendar className="w-4 h-4 mr-2" />
          12 Day Streak
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127.5</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Completed</CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+15 this week</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+5% improvement</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Modules Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">65 total modules</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium w-8">{day.day}</span>
                    <div className="flex-1">
                      <div className="bg-muted rounded-full h-2 w-32">
                        <div 
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(day.hours / 4) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {day.hours}h • {day.quizzes} quizzes
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillProgress.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{skill.skill}</h4>
                  <span className="text-sm text-muted-foreground">
                    {skill.completed}/{skill.total} modules
                  </span>
                </div>
                <ProgressBar value={skill.percentage} className="h-2" />
                <p className="text-sm text-muted-foreground">{skill.percentage}% complete</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 30-Day Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>30-Day Learning Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-10 gap-1">
            {streakData.map((day, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded text-xs flex items-center justify-center ${
                  day.active 
                    ? 'bg-success text-success-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}
                title={`Day ${day.day}`}
              >
                {day.day}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
            <span>Less active</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-muted rounded-sm"></div>
              <div className="w-3 h-3 bg-success/30 rounded-sm"></div>
              <div className="w-3 h-3 bg-success/60 rounded-sm"></div>
              <div className="w-3 h-3 bg-success rounded-sm"></div>
            </div>
            <span>More active</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Progress;