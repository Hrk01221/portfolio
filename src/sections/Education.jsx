import { BookOpen, Medal } from "lucide-react";

const educations = [
  {
    degree: "Bachelor of Science (BSc.)",
    period: "2022-2026",
    institute: "Ahsanullah University of Science and Technology",
    description:
      "Pursuing a degree in Computer Science and Engineering with a focus on algorithms, data structures, software development, and problem solving through competitive programming.",
    gpa: "3.65",
    subject: "CSE",
    tag: [
      "CS",
      "Competitive Programming",
      "Algorithms",
      "Data Structures",
      "Software Engineering",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    period: "2019-2021",
    institute: "Govt. Science College, Tejgaon, Dhaka",
    description:
      "Completed higher secondary education in the Science stream with outstanding academic performance and a strong foundation in mathematics and analytical thinking.",
    gpa: "5.00",
    subject: "Science",
    tag: [
      "Science",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Academic Excellence",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    period: "2017-2019",
    institute: "K.I. Jubilee School and College, Dhaka",
    description:
      "Completed secondary education in the Science stream, developing a solid academic foundation and achieving excellent results.",
    gpa: "5.00",
    subject: "Science",
    tag: [
      "Science",
      "Mathematics",
      "Problem Solving",
      "Academic Excellence",
      "Foundation Studies",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-18 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              makes difference
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My educational journey has built a strong foundation in computer
            science, problem-solving, and analytical thinking, supporting both
            my competitive programming and software development pursuits.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent lg:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          {/* Items */}
          <div className="space-y-12">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid lg:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${100 * (idx + 1)}ms`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 lg:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"></div>
                {/* Content */}
                <div
                  className={`pl-8 lg:pl-0 ${idx % 2 === 0 ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <p className="text-sm lg:text-base text-primary font-medium">
                      {edu.period}
                    </p>
                    <h1 className="text-xl lg:text-2xl font-semibold mt-2">
                      {edu.degree}
                    </h1>
                    <p className="text-base lg:text-xl font-medium text-foreground/80 italic">
                      {edu.institute}
                    </p>
                    <div className="flex flex-wrap gap-2 lg:gap-8 mt-4 text-sm lg:text-base">
                      <p className="flex items-center justify-center gap-2 glass-strong text-primary font-bold rounded-2xl px-2 py-1">
                        <Medal className="w-4 h-4"/>
                        {idx == 0 ? "CGPA" : "Gpa"}: {edu.gpa}
                      </p>
                      <p className="flex items-center justify-center gap-2 glass-strong rounded-2xl px-2 py-1">
                        <BookOpen className="w-4 h-4"/>
                        {idx == 0 ? "Department" : "Subject"}: {edu.subject}
                      </p>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground mt-4 italic">
                      "{edu.description}"
                    </p>
                    <div className={`flex flex-wrap gap-2 mt-4`}>
                      {edu.tag.map((tg, tg_idx) => (
                        <span
                          key={tg_idx}
                          className="px-3 py-1 bg-surface text-[10px] lg:text-xs rounded-full text-muted-foreground"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
