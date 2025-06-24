import { NavBar } from "../components/navbar";
import { StarBackground } from "@/components/starbackground";
import { ThemeToggle } from "../components/themetoggle";
import { HeroSection } from "../components/herosection";
import { AboutMe } from "../components/aboutme";
import { ContactSection } from "../components/contactinfo";
import { SkillsSection } from "../components/skills";
import { ProjectsSection } from "../components/projects";
import { Footer } from "../components/footer";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground/>
            <NavBar />
            <main>
                <HeroSection />
                <AboutMe />
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection />
            </main>
            <Footer/>
        </div>
    );
};
