import { ArrowLeft, ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";
import { useRef, useState } from "react";

const IUPC_RANKS = [
  {
    banner:
      "https://uploads.toph.co/jlIBpbsaI4aU39WGP-fsg9lnjGCY38nNrD63ZsZiK7k/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3ODQ3NDg3MTgzNDg1MjEzMTEtNDAzNDU0MzA1ODQzNTk0OTg0Ny0wZDYwYTlmMzk5ODVjZWQ0ZWU5NDdmY2YyYTk3ZWEzOC5wbmc",
    contest_name: "IUT 12th ICT Fest Inter University Programming Contest 2026",
    rank: "21th",
    team: "AUST_SIMPLEXITY",
    solved: 6,
    penalty: 910,
    standing_link: "https://toph.co/c/iut-inter-university-2026/standings",
  },
  {
    banner:
      "https://uploads.toph.co/U5kLx8UXEn8dZ7m8ZHc-XXRqrsRqFHLpqTFN66MEd8w/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3ODM2OTMwNjE2NTM4MjUyODgtNDgyODg2OTY3MjE1NDc1MDE5LTc0Y2ExOGY2ZTI1NWYzNDAyZWU5ZWFlNTQwMmNlZWUxLnBuZw",
    contest_name: "bKash presents SUST CSE Carnival 2026 — IUPC",
    rank: "22th",
    team: "AUST_SIMPLEXITY",
    solved: 5,
    penalty: 330,
    standing_link: "https://toph.co/c/sust-inter-university-2026/standings",
  },
  {
    banner:
      "https://uploads.toph.co/_mpOkxGvJLhbKdvcRSTVKN_hZhhOA51CsnYLSXS5z9s/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3ODI0OTM1NTgxODA0MzkyMDItMTQ2MDc4NTI4MzcxNjQxODMyNC02MTlhY2M1YzJmZWNhZWJmNGRmZDQyNmUzMjEyODc3MC5qcGVn",
    contest_name: "DUET Inter University Programming Contest 2026",
    rank: "21th",
    team: "AUST_SIMPLEXITY",
    solved: 7,
    penalty: 694,
    standing_link: "https://toph.co/c/duet-inter-university-2026/standings",
  },
  {
    banner: "",
    contest_name: "NSUCEC Cybernauts IUPC 2026",
    rank: "21th",
    team: "AUST_SIMPLEXITY",
    solved: 4,
    penalty: 1071,
    standing_link:
      "https://bapsoj.org/contests/nsucec-cybernauts-iupc-2026/standings",
  },
  {
    banner:
      "https://uploads.toph.co/Iurg8gymiPYNBtbDI1vTXpfdLCYZKBimhKCuylwxMrY/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3Nzg3MDU0ODE1MTM0NTQ4MjItNzg2NTY4NjEyMTI4MTg2NDQ2OC00YTQ3YTBkYjZlNjA4NTNkZWRmY2ZkZjA4YTVjYTI0OS5wbmc",
    contest_name: "NDUB IUPC 2026 Powered By Shohoj Coding",
    rank: "44th",
    team: "AUST_SIMPLEXITY",
    solved: 2,
    penalty: 64,
    standing_link: "https://toph.co/c/ndub-cse-iupc-2026/standings",
  },
  {
    banner:
      "https://uploads.toph.co/pClfCnA00x4xvc7MieusLBm6NUN6PtBlEKcTBfrWK38/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3NzAxOTU1NzA0MTYwMDI4NDctNDIzNTE0MjUwMzQ0MzY1MzI0MC01ZTg1MGMwYTk4NWYwZjRlY2Q4MDc5ZDNjMjU1MTFkYy5wbmc",
    contest_name:
      "Inter University Programming Contest Powered By Phitron | Prime Now Presents BUET CSE Fest 2026",
    rank: "47th",
    team: "AUST_SIMPLEXITY",
    solved: 6,
    penalty: 810,
    standing_link:
      "https://toph.co/c/inter-university-buet-cse-fest-2026/standings",
  },
  {
    banner: "",
    contest_name: "CUET Inter University Programming Contest (IUPC) 2025",
    rank: "11th",
    team: "AUST_SIMPLEXITY",
    solved: 6,
    penalty: 933,
    standing_link: "https://toph.co/c/cuet-iupc-2025/standings",
  },
  {
    banner: "",
    contest_name: "Inter University Programming Contest - MU CSE Fest 2025",
    rank: "72th",
    team: "AUST_SIMPLEXITY",
    solved: 2,
    penalty: "1k",
    standing_link:
      "https://toph.co/c/inter-university-mu-cse-fest-2025/standings",
  },
  {
    banner:
      "https://uploads.toph.co/PUUw-I07g_6xDun-8v7IRBuugyXbqwAqWF69daXemYo/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3NTAzNDk0NzA2MDY1MDczMjUtNjU1NzExNzAwMDgxNjQ1Njc4OC1kMmJhNzYwNTAxMTNiNDVlZjdhNzQ5N2ZlMWJlZWQ2Mi5wbmc",
    contest_name: "Uttara University Inter-University Programming Contest 2025",
    rank: "31th",
    team: "AUST_SIMPLEXITY",
    solved: 6,
    penalty: "943",
    standing_link:
      "https://toph.co/c/uttara-university-inter-university-2025/standings",
  },
  {
    banner:
      "https://uploads.toph.co/ykJxWsO7_0xlHLMP9Dm1nI86uQ3apdonbRKyB_l-gVA/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3NDY4MDk4Nzg5MjA3NDQyODItNzc0MjkyODk0ODM2MTI0ODM3OC05NWQ5MTFmZmUxMDc4NDEwY2EwMDA3NmIwM2E4NWFlMy5qcGVn",
    contest_name:
      "Betopia Group Presents DUET Inter University Programming Contest (IUPC) 2025",
    rank: "22th",
    team: "AUST_SIMPLEXITY",
    solved: 6,
    penalty: "634",
    standing_link:
      "https://toph.co/c/duet-inter-university-iupc-2025/standings",
  },
  {
    banner:
      "https://uploads.toph.co/XmrQI4bCxI2VfZPPen7gQ19whHDdi1rCnkCJLO_ZFqE/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3NDAxOTc4NTgwNzQ2NjMxNzMtNTUyODI5MzA4MzUwMDM5ODExMC05NjY3ZWMyZGY3NmY0Y2E4YjY3Njc1NjI5ODQ5ZjA5Mi5wbmc",
    contest_name: "MTB Presents AUST Inter University Programming Contest 2025",
    rank: "54th",
    team: "AUST_SIMPLEXITY",
    solved: 3,
    penalty: "84",
    standing_link:
      "https://toph.co/c/mtb-presents-aust-inter-university-2025/standings",
  },
  {
    banner: "",
    contest_name: "UIU INTER-UNIVERSITY PROGRAMMING CONTEST 2025",
    rank: "45th",
    team: "AUST_SIMPLEX1TY",
    solved: 4,
    penalty: "407",
    standing_link:
      "https://bapsoj.org/contests/uiu-inter-university-programming-contest-2025/standings",
  },
  {
    banner: "",
    contest_name: "MIAKI PRESENTS KUET IUPC ONSITE 2025",
    rank: "59th",
    team: "AUST_SIMPLEX1TY",
    solved: 3,
    penalty: "473",
    standing_link:
      "https://bapsoj.org/contests/miaki-presents-kuet-iupc-onsite-2025/standings",
  },
  {
    banner:
      "https://uploads.toph.co/SV3brBbsB1_jASq_monu0VrVqAdowusOYesf_lIYay4/resize:fill:1690:480:0/gravity:ce/czM6Ly90b3BoLXBsYXRmb3JtLXVwbG9hZHMvaW1hZ2VzLzE3MzAzMDQ5MzA2MzM5MTMxNzAtODIwNTg0NDM0MzA3OTcxNDczLTU0NDYzNjA3NDM3MzA2NjNmMWI5ODkwMjMwMjRjMWNkLnBuZw",
    contest_name:
      "Inter University Programming Contest | United Group Presents BUET CSE Fest 2024",
    rank: "103th",
    team: "AUST_QTA",
    solved: 2,
    penalty: "366",
    standing_link:
      "https://toph.co/c/inter-university-buet-cse-fest-2024/standings",
  },
];
const ICPC_RANKS = [
  {
    banner:
      "https://icpcasiawest.vercel.app/_next/image?url=%2Ficpc-logo.png&w=1920&q=75",
    contest_name: "ICPC Asia West Continent Championship",
    rank: "48th(11th in BD)",
    team: "AUST_SIMPLEX1TY",
    solved: 3,
    penalty: "05:53:54",
    standing_link:
      "https://icpcasiawest.vercel.app/results?session=94014565-8795-4278-b03c-33187bea12ae",
  },
  {
    banner:
      "https://icpc.global/api/contest/public/contestPublicPhotos/94/download",
    contest_name: "The 2025 ICPC Asia Dhaka Regional Contest",
    rank: "28th",
    team: "AUST_SIMPLEX1TY",
    solved: 4,
    penalty: "439",
    standing_link:
      "https://bapsoj.org/contests/icpc-dhaka-onsite-2025/standings",
  },
  {
    banner:
      "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/467665410_122121231206543491_5557118807710461681_n.png?stp=dst-png&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE04vyQUptXZ5iLlZtBER51hQQvMfEX-3CFBC8x8Rf7cFlVWIjEJwR5jbbLmoJFuN4dfG_iLUVrtH-2TfclAAcK&_nc_ohc=6a5BhopA2BIQ7kNvwFThYMj&_nc_oc=Ado9YKGLG_pb6rakTho_0UFEfLb4WYWYusP6hseSTzd7ZoffWZlhzJ_XIrnqfrcl3sE&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=v65qKGeC2q_LUBZZ1jeC6A&_nc_ss=7b2a8&oh=00_AQFOSo529UlAYpHW0oBUr-a6VqFIqqet6A-rv4komdsxXw&oe=6A711AD9",
    contest_name: "The 2025 ICPC Asia Dhaka Regional Contest",
    rank: "161th",
    team: "AUST_QTA",
    solved: 2,
    penalty: "137",
    standing_link:
      "https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings",
  },
];
export const CompetitiveProgramming = () => {
  const scrollRef = useRef(null);
  const [seeRank, setSeeRank] = useState(false);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const card = container.querySelector(".card");

    if (!card) return;

    const gap = 32; // gap-8 = 2rem = 32px
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
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
              <span>15+ IUPC</span>
              <span className="font-bold">&nbsp;·&nbsp;</span>
              <span>2X ICPC Dhaka Regional</span>
              <span className="font-bold">&nbsp;·&nbsp;</span>
              <span>1X ICPC Asia West Continent</span>
            </div>
          </div>

          <div className="text-sm mb-8 text-premium-purple">
            Online Judge Ranks
          </div>
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

          <div className="text-sm mt-16 mb-8 text-premium-purple">
            IUPC and ICPC Ranks
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-16">
              <span
                onClick={() => setSeeRank(false)}
                className={`text-[12px] lg:text-base text-muted-foreground ${!seeRank ? "border-b text-primary-foreground" : "border-0"} cursor-pointer py-1 px-4 transition-all duration-100`}
              >
                IUPC
              </span>
              <span
                onClick={() => setSeeRank(true)}
                className={`text-[12px] lg:text-base text-muted-foreground ${seeRank ? "border-b text-primary-foreground" : "border-0"} cursor-pointer px-4 transition-all duration-100`}
              >
                ICPC
              </span>
            </div>
            <div className="hidden lg:flex gap-2">
              <div
                onClick={() => scroll("left")}
                className="cursor-pointer glass rounded-full w-12 h-12 flex items-center justify-center"
              >
                <ArrowLeft className="font-bold" />
              </div>
              <div
                onClick={() => scroll("right")}
                className="cursor-pointer glass rounded-full w-12 h-12 flex items-center justify-center"
              >
                <ArrowRight className="font-bold" />
              </div>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="overflow-x-hidden hide-scrollbar flex gap-8"
          >
            {!seeRank
              ? // IUPC PART
                IUPC_RANKS.map((item, idx) => (
                  <div
                    key={idx}
                    className="card glass w-full lg:w-[40%] shrink-0 rounded-2xl p-4 space-y-8"
                  >
                    <div className="relative overflow-hidden h-52">
                      {item.banner != "" ? (
                        <img
                          src={item.banner}
                          alt={item.contest_name}
                          className="h-full w-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="glass h-full rounded-2xl"></div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h3 className="text-white text-xl md:text-3xl font-bold text-center px-4">
                          {item.contest_name}
                        </h3>
                      </div>
                      {item.banner != "" ? (
                        <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                      ) : null}
                    </div>
                    <div className="h-px bg-gradient-to-r from-muted-foreground/80 via-muted-foreground/50 to-transparent" />
                    <div className="tracking-widest  text-base lg:text-lg space-y-4">
                      <div className="flex justify-between">
                        <span>Rank </span>
                        <span className="text-green-400 font-bold">
                          {item.rank}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team </span>
                        <span className="text-orange-400 font-bold">
                          {item.team}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Solved </span>
                        <span className="text-purple-400 font-bold">
                          {item.solved}{" "}
                          <span className="text-red-400">
                            (penalty : {item.penalty})
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="text-base lg:text-lg glass px-4 py-2 text-center rounded-2xl border border-primary/60 tracking-widest">
                        Certificate
                      </div>
                      <div
                        onClick={() =>
                          window.open(item.standing_link, "_blank")
                        }
                        className="text-base lg:text-lg glass px-4 py-2 text-center rounded-2xl border border-primary/60 tracking-widest cursor-pointer hover:border-primary"
                      >
                        Standing
                      </div>
                    </div>
                  </div>
                ))
              : // ICPC Part
                ICPC_RANKS.map((item, idx) => (
                  <div
                    key={idx}
                    className="card glass w-full lg:w-[40%] shrink-0 rounded-2xl p-4 space-y-8"
                  >
                    <div className="relative overflow-hidden h-52">
                      {item.banner != "" ? (
                        <img
                          src={item.banner}
                          alt={item.contest_name}
                          className="h-full w-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="glass h-full rounded-2xl"></div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h3 className="text-white text-xl md:text-3xl font-bold text-center px-4">
                          {item.contest_name}
                        </h3>
                      </div>
                      {item.banner != "" ? (
                        <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                      ) : null}
                    </div>
                    <div className="h-px bg-gradient-to-r from-muted-foreground/80 via-muted-foreground/50 to-transparent" />
                    <div className="tracking-widest  text-base lg:text-lg space-y-4">
                      <div className="flex justify-between">
                        <span>Rank </span>
                        <span className="text-green-400 font-bold">
                          {item.rank}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team </span>
                        <span className="text-orange-400 font-bold">
                          {item.team}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Solved </span>
                        <span className="text-purple-400 font-bold">
                          {item.solved}{" "}
                          <span className="text-red-400">
                            (penalty : {item.penalty})
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="text-base lg:text-lg glass px-4 py-2 text-center rounded-2xl border border-primary/60 tracking-widest">
                        Certificate
                      </div>
                      <div
                        onClick={() =>
                          window.open(item.standing_link, "_blank")
                        }
                        className="text-base lg:text-lg glass px-4 py-2 text-center rounded-2xl border border-primary/60 tracking-widest cursor-pointer hover:border-primary"
                      >
                        Standing
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <div className="flex lg:hidden gap-2 justify-center items-center">
            <div
              onClick={() => scroll("left")}
              className="cursor-pointer glass rounded-full w-12 h-12 flex items-center justify-center"
            >
              <ArrowLeft className="font-bold" />
            </div>
            <div
              onClick={() => scroll("right")}
              className="cursor-pointer glass rounded-full w-12 h-12 flex items-center justify-center"
            >
              <ArrowRight className="font-bold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
