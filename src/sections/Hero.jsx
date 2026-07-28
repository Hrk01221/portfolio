import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { CountUp } from "@/components/CountUp";

const skills = [
  "C++",
  "Competitive Programming",
  "Data Structures",
  "Algorithms",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MERN Stack",
  "Laravel",
  "PHP",
  "MySQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "REST API",
  "Vercel",
  "Problem Solving",
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#C084FC",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column - txt */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[12px]
              lg:text-sm text-primary"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Building, learning, and open to what's next
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span>Hi I am</span>
                <br />
                <span className="text-3xl lg:text-6xl text-highlight italic font-serif tracking-widest">
                  Hridoy Nandi
                </span>
              </h1>
              <div className="text-sm lg:text-2xl text-primary-foreground/80 animate-fade-in animation-delay-200">
                Full-Stack Engineer · Competitive Programmer · AI/ML Enthusiast
              </div>
              <p className="text-sm lg:text-lg text-muted-foreground mx-w-lg animate-fade-in animation-delay-300">
                A full-stack developer and competitive programmer passionate
                about creating modern web applications, solving complex
                problems, and continuously learning new technologies.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 mb-16 gap-6 animate-fade-in animation-delay-400">
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-2xl lg:text-3xl font-bold tracking-wide">
                    <CountUp end={3000}  suffix="+"/>
                  </span>
                  <span className="uppercase text-[10px] lg:text-sm text-muted-foreground">
                    problems solved
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-2xl lg:text-3xl font-bold tracking-wide">
                    <CountUp end={30} suffix="+"/>
                  </span>
                  <span className="uppercase text-[10px] lg:text-sm text-muted-foreground">
                    IUPC Participation
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-2xl lg:text-3xl font-bold tracking-wide">
                    <CountUp end={2} suffix="x"/>
                  </span>
                  <span className="uppercase text-[10px] lg:text-sm text-muted-foreground">
                    ICPC Regionalist
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-2xl lg:text-3xl font-bold tracking-wide">
                    1x
                  </span>
                  <span className="uppercase text-[10px] lg:text-sm text-muted-foreground">
                    Asia-West
                  </span>
                </div>
              </div>
            </div>
            {/* CTAs */}
            <div className="flex justify-center lg:justify-normal flex-wrap gap-4 animate-fade-in animation-delay-500">
              <Button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                className="w-full lg:w-auto cursor-pointer"
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton className="w-full lg:w-auto">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-600">
              <span className="text-muted-foreground">Socials: </span>
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaFacebook, href: "#" },
                { icon: FaXTwitter, href: "#" },
              ].map((social, index) => (
                <a
                  className="p-2 rounded-xl glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  key={index}
                  href={social.href}
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column - pfp */}
          <div className="relative lg:flex lg:justify-end animate-fade-in animation-delay-300">
            {/* PFP */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/pfp.jpg"
                  alt="Hridoy Nandi - Hrk"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            What I Use
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-50">
        <div
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="cursor-pointer flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
