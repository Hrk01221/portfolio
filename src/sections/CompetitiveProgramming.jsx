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
            <div className="mt-16 grid lg:grid-cols-3 gap-8">
              <div className="glass px-4 py-2">
                {/* img */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="/cf.jpg"
                    alt="Codeforces"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="glass px-4 py-2">
                {/* img */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="/cc.jpg"
                    alt="CodeChef"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="glass px-4 py-2">
                {/* img */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="/atcoder.jpg"
                    alt="Atcoder"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
