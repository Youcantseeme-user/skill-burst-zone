import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Star, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      category: "Web Development",
      progress: 75,
      duration: "12 weeks",
      rating: 4.8,
      modules: 24,
      completedModules: 18,
      status: "In Progress"
    },
    {
      id: 2,
      title: "React.js Masterclass",
      category: "Web Development", 
      progress: 45,
      duration: "8 weeks",
      rating: 4.9,
      modules: 16,
      completedModules: 7,
      status: "In Progress"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      category: "DSA",
      progress: 30,
      duration: "10 weeks", 
      rating: 4.7,
      modules: 20,
      completedModules: 6,
      status: "In Progress"
    }
  ];

  const availableCourses = [
    {
      id: 4,
      title: "Mobile App Development with React Native",
      category: "App Development",
      duration: "6 weeks",
      rating: 4.6,
      modules: 12,
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Advanced Problem Solving",
      category: "Aptitude",
      duration: "4 weeks",
      rating: 4.5,
      modules: 8,
      level: "Advanced"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <Button>
          <BookOpen className="w-4 h-4 mr-2" />
          Browse All Courses
        </Button>
      </div>

      {/* Enrolled Courses */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Currently Enrolled</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="skill-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {course.completedModules} of {course.modules} modules completed
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <Badge variant={course.status === "In Progress" ? "default" : "secondary"}>
                    {course.status}
                  </Badge>
                </div>

                <Button className="w-full">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Courses */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recommended for You</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {availableCourses.map((course) => (
            <Card key={course.id} className="skill-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline">{course.category}</Badge>
                    <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.modules} modules
                  </div>
                </div>

                <Badge variant="secondary">{course.level}</Badge>

                <Button variant="outline" className="w-full">
                  <Link to={`/skills/${course.category.toLowerCase().replace(' ', '-')}`}>
                    Enroll Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;