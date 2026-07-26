import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "EasyJudge",
    description:
      "A competitive programming platform where users can solve coding problems, submit solutions, and receive automated verdicts through a secure judging system.",
    image: "/projects/project-1.png",
    tags: ["React", "Express", "Node Js", "Mongo DB"],
    link: "https://easyjudge.onrender.com/",
    github: "https://github.com/Hrk01221/EasyJudge",
  },
  {
    title: "Aradhya Collection",
    description: "A full-stack e-commerce application for Piyal Store.",
    image: "/projects/project-2.png",
    tags: ["React", "Express", "Node Js", "Mongo DB"],
    link: "https://aradhya-collection.vercel.app/",
    github: "https://github.com/Hrk01221/Aradhya-Collection",
  },
  {
    title: "PH Studio",
    description:
      "A responsive music studio website that highlights recording, mixing, mastering, and production services through a modern and engaging user interface, providing visitors with an easy way to explore the studio and get in touch.",
    image: "/projects/project-3.png",
    tags: ["Html", "CSS", "Javascript"],
    link: "https://ph-studio.vercel.app/",
    github: "https://github.com/Hrk01221/PH-STUDIO",
  },
  {
    title: "Zenvite",
    description:
      "Zenvite is a dynamic event management platform that simplifies the process of organizing, booking, and managing events. The platform is designed to streamline attendee registration, event scheduling, and ticket booking, providing a seamless experience for both event organizers and participants.",
    image: "/projects/project-4.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "UI/UX"],
    link: "https://github.com/NabilaRahmanMedha/Zenvite",
    github: "https://github.com/NabilaRahmanMedha/Zenvite",
  },
  {
    title: "Portfolio",
    description:
      "A modern personal portfolio showcasing projects, skills, achievements, and competitive programming experience with interactive UI effects.",
    image: "/projects/project-5.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
    link: "https://hrk-dev-portfolio.vercel.app/",
    github: "https://github.com/Hrk01221/portfolio",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-18 relative overflow-hidden">
      {/* bg-glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work,from complex web app to innovative
            tools that solves real-world problems.
          </p>
        </div>
        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              className="group glass rounded-2xl overflow-hidden animate-fade-in lg:row-span-1 hover:border-2 hover:border-primary/70 transition-all duration-200"
              key={idx}
              style={{
                animationDelay: `${100 * (idx + 1)}ms`,
              }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay links */}
                <div className="hidden absolute inset-0 lg:flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="_blank"
                    href={project.link}
                    className="p-3 rounded-full bg-surface hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="p-3 rounded-full bg-surface hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a target="_blank" href={project.link}>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tag_idx) => (
                    <span
                      key={tag_idx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all CTA*/}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a target="_blank" href="https://github.com/Hrk01221">
            <AnimatedBorderButton className="cursor-pointer">
              View All Projects <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
