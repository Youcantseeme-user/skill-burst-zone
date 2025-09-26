import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Crown, TrendingUp, Target, Calendar } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "/placeholder-avatar.jpg",
      points: 2850,
      streak: 45,
      completionRate: 98,
      badge: "Platinum",
      change: "+2"
    },
    {
      rank: 2,
      name: "Mike Johnson",
      avatar: "/placeholder-avatar.jpg", 
      points: 2720,
      streak: 32,
      completionRate: 95,
      badge: "Gold",
      change: "-1"
    },
    {
      rank: 3,
      name: "Emily Davis",
      avatar: "/placeholder-avatar.jpg",
      points: 2650,
      streak: 28,
      completionRate: 92,
      badge: "Gold",
      change: "+1"
    },
    {
      rank: 4,
      name: "Alex Wilson",
      avatar: "/placeholder-avatar.jpg",
      points: 2480,
      streak: 21,
      completionRate: 89,
      badge: "Silver",
      change: "0"
    },
    {
      rank: 5,
      name: "Lisa Park",
      avatar: "/placeholder-avatar.jpg",
      points: 2350,
      streak: 18,
      completionRate: 87,
      badge: "Silver", 
      change: "+3"
    }
  ];

  const myRank = {
    rank: 23,
    name: "Alex Johnson (You)",
    points: 1680,
    streak: 12,
    completionRate: 85,
    badge: "Bronze"
  };

  const categoryLeaders = [
    { category: "Web Development", leader: "Sarah Chen", points: 1250 },
    { category: "App Development", leader: "Mike Johnson", points: 980 },
    { category: "DSA", leader: "Emily Davis", points: 1180 },
    { category: "Aptitude", leader: "Lisa Park", points: 850 }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Platinum": return "bg-purple-100 text-purple-800";
      case "Gold": return "bg-yellow-100 text-yellow-800";
      case "Silver": return "bg-gray-100 text-gray-800";
      case "Bronze": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank against other learners</p>
        </div>
        <Badge className="bg-success text-success-foreground">
          Rank #{myRank.rank}
        </Badge>
      </div>

      {/* My Ranking Card */}
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{myRank.name}</h3>
                <p className="text-muted-foreground">Your current position</p>
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="text-2xl font-bold text-primary">#{myRank.rank}</div>
              <Badge className={getBadgeColor(myRank.badge)}>{myRank.badge}</Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-primary/20">
            <div className="text-center">
              <div className="text-lg font-semibold">{myRank.points}</div>
              <div className="text-xs text-muted-foreground">Points</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">{myRank.streak}</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">{myRank.completionRate}%</div>
              <div className="text-xs text-muted-foreground">Completion</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overall" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overall">Overall</TabsTrigger>
          <TabsTrigger value="streaks">Streaks</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="overall" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Top Performers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-full">
                        {getRankIcon(user.rank)}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{user.points} points</span>
                          <span>•</span>
                          <span>{user.streak} day streak</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getBadgeColor(user.badge)}>{user.badge}</Badge>
                      <div className={`text-sm font-medium ${
                        user.change.startsWith('+') ? 'text-success' :
                        user.change.startsWith('-') ? 'text-destructive' : 'text-muted-foreground'
                      }`}>
                        {user.change !== "0" && (user.change.startsWith('+') ? '↗' : '↘')} {user.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="streaks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Longest Streaks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topUsers.sort((a, b) => b.streak - a.streak).map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-full">
                        <span className="text-sm font-bold">#{index + 1}</span>
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">{user.points} total points</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-success">{user.streak}</div>
                      <div className="text-sm text-muted-foreground">days</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryLeaders.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Crown className="w-6 h-6 text-yellow-500" />
                      <div>
                        <h4 className="font-medium">{category.leader}</h4>
                        <p className="text-sm text-muted-foreground">Category Leader</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">{category.points}</div>
                      <div className="text-sm text-muted-foreground">points</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Leaderboard;