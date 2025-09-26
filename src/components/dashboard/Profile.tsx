import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Calendar, Trophy, Target, Edit } from "lucide-react";

const Profile = () => {
  const userSkills = [
    { name: "JavaScript", level: "Advanced", progress: 85 },
    { name: "React", level: "Intermediate", progress: 70 },
    { name: "HTML/CSS", level: "Expert", progress: 95 },
    { name: "Problem Solving", level: "Intermediate", progress: 65 },
  ];

  const badges = [
    { name: "Week Warrior", color: "bg-success", icon: Calendar },
    { name: "Quiz Master", color: "bg-primary", icon: Trophy },
    { name: "Streak Champion", color: "bg-warning", icon: Target },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button>
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-2xl">A</AvatarFallback>
            </Avatar>
            <CardTitle>Alex Johnson</CardTitle>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">alex.johnson@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">Joined March 2024</span>
            </div>
            <div className="flex items-center space-x-3">
              <Trophy className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">Gold Level</span>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Badges */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {userSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{skill.name}</h4>
                    <Badge variant="secondary">{skill.level}</Badge>
                  </div>
                  <div className="bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-right">{skill.progress}% Complete</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <div className={`p-2 rounded-lg ${badge.color} text-white`}>
                      <badge.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{badge.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;