import { AnimatedCard } from "@/components/AnimatedCard";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaPython,
  FaPhp,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiLinux,
  SiVercel,
  SiCplusplus,
  SiJsonwebtokens,
} from "react-icons/si";
const accentMap = {
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    chip: "border-cyan-500/30 hover:bg-cyan-500/10",
  },
  emerald: {
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    chip: "border-emerald-500/30 hover:bg-emerald-500/10",
  },
  orange: {
    text: "text-orange-400",
    border: "border-orange-500/30",
    chip: "border-orange-500/30 hover:bg-orange-500/10",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-500/30",
    chip: "border-purple-500/30 hover:bg-purple-500/10",
  },
};
const skillCategories = [
  {
    id: "01",
    is: "Client Side",
    title: "Frontend",
    description:
      "Crafting responsive, accessible, and engaging user interfaces with modern web technologies.",
    gradient: "from-blue-500/40 via-cyan-500/25 to-transparent",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
    ],
    accent: "cyan",
    glowColor:"rgba(34,211,238,0.25)",
    borderColor: "hover:border-cyan-500/40"
  },
  {
    id: "02",
    is: "Server Side",
    title: "Backend",
    description:
      "Building scalable APIs, business logic, and database-driven applications.",
    gradient: "from-emerald-500/40 via-green-500/25 to-transparent",
    skills: [
      { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "REST APIs", icon: SiJsonwebtokens, color: "text-purple-400" },
      {
        name: "Authentication",
        icon: SiJsonwebtokens,
        color: "text-yellow-500",
      },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
    accent: "emerald",
    glowColor:"rgba(16,185,129,0.25)",
    borderColor: "hover:border-emerald-500/40"
  },
  {
    id: "03",
    is: "Cloud & Infrastructure",
    title: "DevOps",
    description:
      "Managing deployment workflows, version control, and development environments.",
    gradient: "from-orange-500/40 via-red-500/25 to-transparent",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGitAlt, color: "text-white" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-400" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "CI/CD", icon: FaGitAlt, color: "text-green-400" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "AWS", icon: FaAws, color: "text-yellow-500" },
    ],
    accent: "orange",
    glowColor:"rgba(249,115,22,0.25)",
    borderColor: "hover:border-orange-500/40"
  },
  {
    id: "04",
    is: "Technical Foundations",
    title: "Languages",
    description:
      "Leveraging algorithms, data structures, and analytical thinking to solve complex challenges.",
    gradient: "from-purple-500/40 via-pink-500/25 to-transparent",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "Algorithms", icon: SiCplusplus, color: "text-purple-400" },
      { name: "Data Structures", icon: SiCplusplus, color: "text-cyan-400" },
      {
        name: "Competitive Programming",
        icon: SiCplusplus,
        color: "text-orange-400",
      },
    ],
    accent: "purple",
    glowColor:"rgba(168,85,247,0.25)",
    borderColor: "hover:border-purple-500/40"
  },
];
export const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-6 md:px-20 relative mb-20 z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills that
            <span className="font-serif italic font-normal text-white">
              {" "}
              makes difference
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Technologies and skills I use to transform ideas into efficient,
            scalable, and impactful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
          {skillCategories.map((sc, idx) => {
            const theme = accentMap[sc.accent];

            return (
              <div
                key={idx}
                style={{
                  animationDelay: `${100 * (idx + 1)}ms`,
                }}
                className="animate-fade-in h-full"
              >
                <AnimatedCard className="h-full" glowColor={sc.glowColor} borderColor={sc.borderColor}>
                  <div className="group flex flex-col h-full space-y-4">
                    <div className="flex gap-4">
                      <div
                        className={`
                          glass rounded-xl tracking-widest text-2xl
                          flex items-center justify-center px-3 py-2
                          ${theme.border}
                        `}
                      >
                        <span className={`font-bold ${theme.text}`}>
                          {sc.id}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span
                          className={`text-[10px] md:text-sm font-serif tracking-widest ${theme.text}`}
                        >
                          {sc.is}
                        </span>

                        <span className="text-xl tracking-widest">
                          {sc.title}
                        </span>
                      </div>
                    </div>

                    <p className="text-[10px] md:text-base text-muted-foreground italic">
                      {sc.description}
                    </p>

                    <div
                      className={`w-full bg-linear-to-r h-px mt-4 ${sc.gradient}`}
                    />

                    <div className="flex flex-wrap gap-3 mt-auto">
                      {sc.skills.map((skill, skill_idx) => (
                        <div
                          key={skill_idx}
                          className={`
                            flex items-center gap-2
                            px-3 py-2
                            rounded-lg border
                            transition-all duration-300
                            ${theme.chip}
                            animate-fade-in
                            animation-delay-400
                          `}
                        >
                          <skill.icon className={`${skill.color} text-sm md:text-base`} />

                          <span className="font-serif text-[10px] md:text-sm tracking-wide">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
