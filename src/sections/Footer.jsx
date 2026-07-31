import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCode,
  FaGithub,
} from "react-icons/fa6";
const quicklinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Competitive Programming", id: "cp" },
  { label: "Achievements", id: "achievements" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
];
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section
      id="footer"
      className="py-8 relative overflow-hidden bg-background border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-20 relative z-10 space-y-8 animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* left section */}
          <div className="space-y-4 lg:place-self-auto">
            <div className="flex items-center gap-4">
              <span className="glass p-2 rounded-lg">
                <FaCode />
              </span>
              <span className="text-lg">Hridoy Nandi</span>
            </div>
            <div className="text-muted-foreground text-sm">
              Software Engineer · Competitive Programmer ·
              <br />
              Solving a complex problem right now :)
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/hridoy.nandi.14/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com/Hrk01221"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://github.com/Hrk01221"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hridoy-nandi-69330b369/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* right section */}
          <div className="space-y-2 lg:place-self-auto">
            <div className="">Quick links</div>
            <div className="text-muted-foreground/60 grid grid-cols-2 gap-3 lg:place-items-start">
              {quicklinks.map((link, idx) => (
                <span
                  onClick={() =>
                    document
                      .getElementById(link.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  key={idx}
                  className="text-sm hover:text-primary cursor-pointer transition-all duration-300"
                >
                  {link.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-primary/60 via-primary/40 to-transparent" />
        <div className="text-[10px] lg:text-sm text-muted-foreground tracking-wide flex items-center justify-center">
          © {currentYear} Hridoy Nandi  ·  CSE @ AUST <span className="hidden lg:block">  ·  Built with 💜 in Dhaka, Bangladesh</span>
        </div>
      </div>
    </section>
  );
};
