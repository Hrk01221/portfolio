import { Code2, Trophy, Layers3, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and readable code.",
  },
  {
    icon: Layers3,
    title: "Dev-Ops",
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
      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col gap-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left col */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className=" font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full-Stack Developer from Bangladesh specializing in
                modern web technologies such as React, Next.js, Node.js,
                Laravel, and MySQL.
              </p>

              <p>
                I enjoy building scalable, user-friendly applications and
                turning ideas into reliable digital products with clean and
                efficient code.
              </p>

              <p>
                Alongside development, I practice Competitive Programming to
                strengthen my problem-solving skills and deepen my understanding
                of algorithms and data structures.
              </p>
            </div>
          </div>
          {/* right col */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((items, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  animationDelay: `${100 * (idx + 1)}ms`,
                }}
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <items.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 whitespace-nowrap">
                    {items.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:w-[80%] mx-auto glass rounded-2xl px-6 py-10 lg:py-20 animate-fade-in animation-delay-300 flex flex-col justify-center items-center text-center gap-8">
          
          <span className="text-primary text-7xl lg:text-9xl absolute top-2 left-3 lg:left-6 opacity-10">“</span>
          <span className="text-primary text-7xl lg:text-9xl absolute right-2 translate-y-20 lg:translate-y-38 opacity-10">”</span>

          <span className="text-base lg:text-4xl italic font-serif">
            Every solved problem reveals <br /> a better question.
          </span>
  
          <span className="text-green-400 tracking-widest text-sm lg:text-xl italic">— Hridoy Nandi</span>
        </div>
      </div>
    </section>
  );
};
