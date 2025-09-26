import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Target, 
  Clock, 
  Trophy, 
  Calendar,
  CheckCircle,
  PlayCircle,
  Zap
} from "lucide-react";

const DailyTasks = () => {
  const dailyTasks = [
    {
      id: 1,
      title: "Complete HTML Quiz #5",
      description: "Test your knowledge on HTML forms and validation",
      category: "Web Development",
      points: 50,
      timeEstimate: "10 min",
      completed: false,
      type: "quiz"
    },
    {
      id: 2,
      title: "Watch React Hook Tutorial",
      description: "Learn about useState and useEffect hooks",
      category: "Web Development",
      points: 30,
      timeEstimate: "15 min",
      completed: true,
      type: "video"
    },
    {
      id: 3,
      title: "Solve Array Problem",
      description: "Practice array manipulation algorithms",
      category: "DSA",
      points: 75,
      timeEstimate: "20 min",
      completed: false,
      type: "coding"
    },
    {
      id: 4,
      title: "Read about CSS Grid",
      description: "Understanding CSS Grid layout system",
      category: "Web Development",
      points: 25,
      timeEstimate: "12 min",
      completed: false,
      type: "reading"
    }
  ];

  const weeklyChallenge = {
    title: "Web Development Sprint",
    description: "Complete 5 React modules this week",
    progress: 3,
    target: 5,
    reward: "200 points + Badge",
    daysLeft: 4
  };

  const todayStats = {
    tasksCompleted: 1,
    totalTasks: 4,
    pointsEarned: 30,
    streakDays: 12
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Daily Tasks</h1>
          <p className="text-muted-foreground">Stay consistent with your learning journey</p>
        </div>
        <div className="streak-badge">
          <Calendar className="w-4 h-4 mr-2" />
          {todayStats.streakDays} Day Streak
        </div>
      </div>

      {/* Today's Progress */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.tasksCompleted}/{todayStats.totalTasks}</div>
            <p className="text-xs text-muted-foreground">Today's progress</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points Earned</CardTitle>
            <Trophy className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.pointsEarned}</div>
            <p className="text-xs text-muted-foreground">Today's points</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.streakDays}</div>
            <p className="text-xs text-muted-foreground">Consecutive days</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Tasks */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Today's Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dailyTasks.map((task) => (
                <div 
                  key={task.id} 
                  className={`flex items-center space-x-4 p-4 rounded-lg border transition-colors ${
                    task.completed ? 'bg-success/5 border-success/20' : 'bg-card hover:bg-muted/50'
                  }`}
                >
                  <Checkbox 
                    checked={task.completed}
                    className="data-[state=checked]:bg-success data-[state=checked]:border-success"
                  />
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {task.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {task.points} pts
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {task.timeEstimate}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {task.category}
                    </Badge>
                  </div>

                  {!task.completed && (
                    <Button size="sm">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Start
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Weekly Challenge */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Weekly Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">{weeklyChallenge.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{weeklyChallenge.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{weeklyChallenge.progress}/{weeklyChallenge.target}</span>
                  </div>
                  <div className="bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.target) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <div className="text-sm font-medium text-primary">Reward:</div>
                  <div className="text-sm">{weeklyChallenge.reward}</div>
                </div>

                <div className="mt-2 text-xs text-muted-foreground">
                  {weeklyChallenge.daysLeft} days remaining
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Take Random Quiz
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <PlayCircle className="w-4 h-4 mr-2" />
                Continue Last Module
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Trophy className="w-4 h-4 mr-2" />
                View Achievements
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;