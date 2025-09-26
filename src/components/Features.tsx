import { BarChart3, Calendar, Trophy, BookOpen, Target, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Structured modules with video content, quizzes, and hands-on projects across multiple domains.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Visual progress bars, performance analytics, and detailed insights into your learning journey.",
    },
    {
      icon: Calendar,
      title: "30-Day Streaks",
      description: "Build consistent learning habits with streak tracking and daily achievement rewards.",
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "Compete with peers, climb rankings based on quiz scores, completion rates, and streaks.",
    },
    {
      icon: Target,
      title: "Skill Categories",
      description: "Master Web Development, App Development, Aptitude, DSA, and more specialized skills.",
    },
    {
      icon: Zap,
      title: "Daily Challenges",
      description: "Stay engaged with daily quizzes, coding challenges, and skill-building exercises.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">SkillSprint</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your learning journey and achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="skill-card group">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;