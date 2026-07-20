import { Code2, Trophy, Layers3, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and readable code.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications with modern technologies.",
  },
  {
    icon: Trophy,
    title: "Problem Solver",
    description:
      "Solving complex algorithmic problems efficiently and optimally.",
  },
  {
    icon: Lightbulb,
    title: "Project Builder",
    description:
      "Transforming ideas into impactful real-world software solutions.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left col */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className=" font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full-Stack Developer from Bangladesh with experience
                building modern web applications using React, Next.js, Node.js,
                Express, Laravel, and MySQL. I enjoy creating scalable,
                user-friendly solutions that combine clean design with efficient
                backend architecture.
              </p>

              <p>
                Beyond web development, I actively practice Competitive
                Programming, strengthening my problem-solving abilities and
                understanding of algorithms and data structures. This analytical
                mindset helps me write optimized, reliable, and maintainable
                code.
              </p>

              <p>
                I love turning ideas into real products, whether it's developing
                online judge systems, event booking platforms, portfolio
                websites, or IoT projects. I'm constantly learning new
                technologies and exploring better ways to build impactful
                software.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Transforming complex problems into elegant, scalable, and
                impactful software solutions."
              </p>
            </div>
          </div>
          {/* right col */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((items, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${100 * (idx + 1)}ms`,
                }}
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <items.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 whitespace-nowrap">{items.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
