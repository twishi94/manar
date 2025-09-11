import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { GrowthPlatform } from "./components/GrowthPlatform";
import { Partnership } from "./components/Partnership";
import { Industries } from "./components/Industries";
import { TrainingSkillDevelopment } from "./components/TrainingSkillDevelopment";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Blog } from "./components/Blog";
import { BlogPreview } from "./components/BlogPreview";
import { FinalCTA } from "./components/FinalCTA";
import { ThemeProvider } from "./components/ThemeProvider";
import { Solar } from "./components/Solar";

export default function App() {
  const [activeIndustry, setActiveIndustry] = useState("agriculture");
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "products":
        return <Products />;
      case "blog":
        return <Blog />;
      case "solar":
        return <Solar />;
      case "home":
      default:
        return (
          <main>
            <Hero activeIndustry={activeIndustry} setActiveIndustry={setActiveIndustry} />
            <Services onNavigate={handleNavigation} />
            <GrowthPlatform />
            <CaseStudies />
            <Partnership />
            <Industries activeTab={activeIndustry} />
            <TrainingSkillDevelopment />
            <BlogPreview onNavigate={handleNavigation} />
            <FinalCTA />
          </main>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        
        {renderPage()}
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}