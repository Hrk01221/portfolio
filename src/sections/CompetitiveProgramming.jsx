import { ArrowUpRight, MoveRight } from "lucide-react";

export const CompetitiveProgramming = () => {
  return (
    <section id="cp">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="space-y-8">
          <div className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Competitive Programming
          </div>

          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Rating & Rankings
              <span className="font-serif italic font-normal text-white">
                {" "}
                Across Platforms
              </span>
            </div>
            <div className="flex flex-wrap text-[10px] lg:text-base text-muted-foreground">
              <span>3000+ Problems solved</span>
              <span className="font-bold">&nbsp;·&nbsp;</span>
              <span>200+ Contests</span>
              <span className="font-bold">&nbsp;·&nbsp;</span>
              <span>31+ IUPC</span>
              <span className="font-bold">&nbsp;·&nbsp;</span>
              <span>2X ICPC Dhaka Regional</span>
              <span className="font-bold">&nbsp;·&nbsp;</span>
              <span>1X ICPC Asia West Continent</span>
            </div>
          </div>

          <div className="text-sm mb-8 text-premium-purple">Online Judge Ranks</div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* CF */}
            <div className="relative glass px-6 py-4 space-y-4 rounded-2xl hover:translate-x-1 hover:-translate-y-1 transition-all ease-out duration-400 hover:border-primary/60">
              {/* img */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="/cf.jpg"
                  alt="Codeforces"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
              <div className="h-[1px] bg-gradient-to-r from-muted-foreground/80 via-muted-foreground/50 to-transparent" />
              <div className="text-center text-primary-foreground font-bold">
                CodeForces &nbsp;{" "}
                <span className="text-[#03A89E] glass-strong px-2 py-1 rounded-2xl">
                  Specialist
                </span>
              </div>
              <div className="text-muted-foreground flex justify-between cursor-pointer">
                Handle :{" "}
                <span
                  onClick={() =>
                    window.open(
                      "https://codeforces.com/profile/H_R_K",
                      "_blank",
                    )
                  }
                  className="text-primary-foreground/80 text-sm hover:text-primary"
                >
                  @H_R_K
                </span>
              </div>
              <div className="text-muted-foreground flex justify-between">
                Solved : <span className="text-primary-foreground">2000+</span>
              </div>
              <div className="text-muted-foreground flex justify-between">
                Peak Rating : <span className="text-[#03A89E]">{1599}</span>
              </div>
              <div className="text-muted-foreground flex justify-between">
                Current Rating : <span className="text-[#008000]">1340</span>
              </div>
              <span
                onClick={() =>
                  window.open("https://codeforces.com/profile/H_R_K", "_blank")
                }
                className="text-highlight px-4 py-1 glass-strong rounded-lg flex justify-center gap-2 cursor-pointer hover:border-primary/40"
              >
                See Profile <MoveRight className="w-5 h-5" />
              </span>
            </div>
            {/* CC */}
            <div className="relative glass px-6 py-4 space-y-4 rounded-2xl hover:translate-x-1 hover:-translate-y-1 transition-all ease-out duration-400 hover:border-primary/60">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="/cc.jpg"
                  alt="CodeChef"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              <div className="h-[1px] bg-gradient-to-r from-muted-foreground/80 via-muted-foreground/50 to-transparent" />

              <div className="text-center text-primary-foreground font-bold">
                CodeChef &nbsp;{" "}
                <span className="text-[#F4C430] glass-strong px-2 py-1 rounded-2xl">
                  4★
                </span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Handle :
                <span
                  onClick={() =>
                    window.open(
                      "https://www.codechef.com/users/hrk_nandi",
                      "_blank",
                    )
                  }
                  className="text-primary-foreground/80 text-sm hover:text-primary cursor-pointer"
                >
                  @H_R_K
                </span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Solved : <span className="text-primary-foreground">300+</span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Peak Rating : <span className="text-[#F4C430]">1871</span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Current Rating : <span className="text-[#5D8AA8]">1709</span>
              </div>

              <span
                onClick={() =>
                  window.open(
                    "https://www.codechef.com/users/hrk_nandi",
                    "_blank",
                  )
                }
                className="text-highlight px-4 py-1 glass-strong rounded-lg flex justify-center gap-2 cursor-pointer hover:border-primary/40"
              >
                See Profile <MoveRight className="w-5 h-5" />
              </span>
            </div>
            {/* ATC */}
            <div className="relative glass px-6 py-4 space-y-4 rounded-2xl hover:translate-x-1 hover:-translate-y-1 transition-all ease-out duration-400 hover:border-primary/60">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="/atcoder.jpg"
                  alt="AtCoder"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              <div className="h-[1px] bg-gradient-to-r from-muted-foreground/80 via-muted-foreground/50 to-transparent" />

              <div className="text-center text-primary-foreground font-bold">
                AtCoder &nbsp;{" "}
                <span className="text-[#00C0C0] glass-strong px-2 py-1 rounded-2xl">
                  Cyan
                </span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Handle :
                <span
                  onClick={() =>
                    window.open("https://atcoder.jp/users/H_R_K", "_blank")
                  }
                  className="text-primary-foreground/80 text-sm hover:text-primary cursor-pointer"
                >
                  @H_R_K
                </span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Solved : <span className="text-primary-foreground">300+</span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Peak Rating : <span className="text-[#00C0C0]">1299</span>
              </div>

              <div className="text-muted-foreground flex justify-between">
                Current Rating : <span className="text-[#00C0C0]">1299</span>
              </div>

              <span
                onClick={() =>
                  window.open("https://atcoder.jp/users/H_R_K", "_blank")
                }
                className="text-highlight px-4 py-1 glass-strong rounded-lg flex justify-center gap-2 cursor-pointer hover:border-primary/40"
              >
                See Profile <MoveRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
