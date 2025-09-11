import { useState } from "react";
import { Button } from "./ui/button";
import { IsometricMenu, IsometricClose } from "./IsometricIcons";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header({ currentPage = "home", onNavigate }: { 
  currentPage?: string; 
  onNavigate?: (page: string) => void; 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Solutions", href: "#", page: "home" },
    { name: "Solar Energy", href: "#", page: "solar" },
    { name: "Industries", href: "#", page: "home" },
    { name: "Products", href: "#", page: "products" },
    { name: "About", href: "#", page: "home" },
    { name: "Contact", href: "#", page: "home" }
  ];

  const handleNavClick = (page: string, event: React.MouseEvent) => {
    event.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">Manar.ai</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.page, e)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" className="text-foreground hover:bg-accent">
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <IsometricClose className="h-5 w-5" />
              ) : (
                <IsometricMenu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 font-medium px-2 py-2 cursor-pointer"
                  onClick={(e) => handleNavClick(item.page, e)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start text-foreground hover:bg-accent">
                  Sign In
                </Button>
                <Button className="justify-start bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}