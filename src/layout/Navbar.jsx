import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navLinks = [
  { id: "about", label: "About" },
  { id: "cp", label: "Competitive Programming" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];
export const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}
    >
      <nav className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        <div
          onClick={() => {
            document.getElementById("hero")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="text-xl font-bold tracking-tight hover:text-primary cursor-pointer transition-all duration-400"
        >
          <span className="italic font-serif tracking-widest">Hrk</span> <span className="text-primary">.</span>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div
                onClick={() =>
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                key={index}
                className={`cursor-pointer px-4 py-2 text-sm rounded-full transition-all duration-300 hover:text-foreground hover:bg-surface ${activeSection === link.id && "bg-highlight text-primary-foreground"}`}
              >
                {link.label}
              </div>
            ))}
          </div>
        </div>
        {/* CTA Button */}
          <Button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            size="sm"
            className="cursor-pointer hidden lg:block"
          >
            Contact Me
          </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-foreground cursor-pointer"
        >
          {!isMobileMenuOpen ? <Menu size={24} /> : <X size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById(link.id)?.scrollIntoView({behavior:"smooth"})
                }}
                className={`text-lg ${activeSection===link.id ? "text-highlight" : "text-muted-foreground"}  py-2`}
              >
                {link.label}
              </div>
            ))}
            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
                setIsMobileMenuOpen(false);
              }}
              size="sm"
              className="my-2"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
