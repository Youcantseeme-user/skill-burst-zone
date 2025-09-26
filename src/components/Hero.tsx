import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, Target, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Active Learners" },
    { icon: Target, value: "50+", label: "Skill Modules" },
    { icon: Trophy, value: "95%", label: "Success Rate" },
    { icon: TrendingUp, value: "30 Day", label: "Streak Goal" },
  ];

  return (
    <div className="hero-section min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master Skills with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              SkillSprint
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Sprint through skills with progress tracking, streaks, and competitive learning. 
            Join thousands of learners mastering Web Development, App Development, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg glow-effect">
              <Link to="/dashboard">Start Learning Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <Link to="/skills/web-dev">Explore Skills</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-transform hover:scale-105">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;