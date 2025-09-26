import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { 
  BookOpen, 
  PlayCircle, 
  CheckCircle, 
  Clock, 
  Star,
  FileText,
  Video,
  Code,
  Brain
} from "lucide-react";

const SkillPage = () => {
  const { skillId } = useParams();
  
  const skillData: { [key: string]: any } = {
    "web-dev": {
      title: "Web Development",
      description: "Master modern web development from HTML basics to advanced React applications",
      icon: Code,
      modules: [
        { 
          id: 1, 
          title: "HTML Fundamentals", 
          progress: 100, 
          lessons: 8, 
          quizzes: 3, 
          duration: "2 hours",
          topics: ["HTML Structure", "Forms", "Semantic HTML", "Accessibility"]
        },
        { 
          id: 2, 
          title: "CSS Mastery", 
          progress: 85, 
          lessons: 12, 
          quizzes: 4, 
          duration: "4 hours",
          topics: ["Flexbox", "Grid", "Animations", "Responsive Design"]
        },
        { 
          id: 3, 
          title: "JavaScript Essentials", 
          progress: 60, 
          lessons: 15, 
          quizzes: 6, 
          duration: "6 hours",
          topics: ["Variables", "Functions", "DOM Manipulation", "Events"]
        },
        { 
          id: 4, 
          title: "React Fundamentals", 
          progress: 25, 
          lessons: 18, 
          quizzes: 8, 
          duration: "8 hours",
          topics: ["Components", "Props", "State", "Hooks"]
        }
      ]
    },
    "app-dev": {
      title: "App Development",
      description: "Build mobile applications with React Native and cross-platform frameworks",
      icon: BookOpen,
      modules: [
        { 
          id: 1, 
          title: "Mobile Development Basics", 
          progress: 40, 
          lessons: 10, 
          quizzes: 4, 
          duration: "3 hours",
          topics: ["Mobile UI", "Navigation", "State Management", "APIs"]
        },
        { 
          id: 2, 
          title: "React Native", 
          progress: 0, 
          lessons: 20, 
          quizzes: 8, 
          duration: "10 hours",
          topics: ["Components", "Navigation", "Storage", "Publishing"]
        }
      ]
    },
    "aptitude": {
      title: "Aptitude",
      description: "Enhance logical reasoning, quantitative aptitude, and problem-solving skills",
      icon: Brain,
      modules: [
        { 
          id: 1, 
          title: "Logical Reasoning", 
          progress: 70, 
          lessons: 12, 
          quizzes: 10, 
          duration: "4 hours",
          topics: ["Patterns", "Sequences", "Analogies", "Coding-Decoding"]
        },
        { 
          id: 2, 
          title: "Quantitative Aptitude", 
          progress: 45, 
          lessons: 15, 
          quizzes: 12, 
          duration: "6 hours",
          topics: ["Arithmetic", "Algebra", "Geometry", "Statistics"]
        }
      ]
    },
    "dsa": {
      title: "Data Structures & Algorithms",
      description: "Master fundamental data structures and algorithmic problem-solving",
      icon: Code,
      modules: [
        { 
          id: 1, 
          title: "Arrays & Strings", 
          progress: 30, 
          lessons: 8, 
          quizzes: 5, 
          duration: "3 hours",
          topics: ["Array Operations", "String Manipulation", "Two Pointers", "Sliding Window"]
        },
        { 
          id: 2, 
          title: "Linked Lists", 
          progress: 0, 
          lessons: 6, 
          quizzes: 4, 
          duration: "2 hours",
          topics: ["Singly Linked List", "Doubly Linked List", "Circular Lists", "Operations"]
        }
      ]
    }
  };

  const skill = skillData[skillId || "web-dev"];
  const IconComponent = skill?.icon || Code;

  if (!skill) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Skill not found</h1>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </div>
    );
  }

  const totalProgress = skill.modules.reduce((acc: number, module: any) => acc + module.progress, 0) / skill.modules.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Skill Header */}
      <div className="bg-primary/5 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-primary/10 p-3 rounded-xl">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{skill.title}</h1>
              <p className="text-xl text-muted-foreground mt-2">{skill.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="stat-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-2xl font-bold">{Math.round(totalProgress)}%</span>
                </div>
                <Progress value={totalProgress} className="h-2" />
              </CardContent>
            </Card>
            
            <Card className="stat-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{skill.modules.length}</div>
                    <span className="text-sm text-muted-foreground">Modules</span>
                  </div>
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="stat-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">4.8</div>
                    <span className="text-sm text-muted-foreground">Rating</span>
                  </div>
                  <Star className="w-6 h-6 text-warning fill-current" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
          <p className="text-muted-foreground">Complete modules in sequence to build your expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skill.modules.map((module: any) => (
            <Card key={module.id} className="skill-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Video className="w-4 h-4 mr-1" />
                        {module.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {module.quizzes} quizzes
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {module.duration}
                      </div>
                    </div>
                  </div>
                  {module.progress === 100 && (
                    <CheckCircle className="w-6 h-6 text-success" />
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    {module.progress > 0 ? "Continue" : "Start Module"}
                  </Button>
                  <Button variant="outline">
                    Take Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Daily Quiz Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Daily Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-2">Today's {skill.title} Quiz</h3>
                <p className="text-muted-foreground mb-4">
                  Test your knowledge with 10 carefully selected questions
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <Badge>10 Questions</Badge>
                  <Badge variant="secondary">15 minutes</Badge>
                  <Badge variant="outline">+50 Points</Badge>  
                </div>
              </div>
              <Button size="lg" className="glow-effect">
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Daily Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillPage;