import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Code, Brain, Database } from "lucide-react";

const Navbar = () => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const skillCategories = [
    { name: "Web Development", path: "/skills/web-dev", icon: Code },
    { name: "App Development", path: "/skills/app-dev", icon: BookOpen },
    { name: "Aptitude", path: "/skills/aptitude", icon: Brain },
    { name: "DSA", path: "/skills/dsa", icon: Database },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">SkillSprint</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>

            {/* Skills Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsSkillsOpen(true)}
                onMouseLeave={() => setIsSkillsOpen(false)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                <span>Skills</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isSkillsOpen && (
                <div
                  onMouseEnter={() => setIsSkillsOpen(true)}
                  onMouseLeave={() => setIsSkillsOpen(false)}
                  className="absolute top-full left-0 mt-2 navbar-dropdown"
                >
                  {skillCategories.map((skill) => (
                    <Link
                      key={skill.path}
                      to={skill.path}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-accent rounded-lg transition-colors"
                    >
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;