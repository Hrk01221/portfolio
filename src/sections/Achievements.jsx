import { useRef } from "react";
import { FlipCard } from "../components/FlipCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const achievements = [
  {
    img: "https://aust.edu/storage/files/ZPerSq8ZOdwODC2psgdsWQFNgoeyCuwwPmMoHS8s.jpg",
    type: "Programming Contest",
    name: "BUBT Inter University Collaborative Programming Contest",
    rank: "1st runner up",
    team: "AUST_SIMPLEXITY",
    solved: "7 Problems",
    totTeams: "70+",
  },
  {
    img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/480401934_122199339740182066_2937126468643158199_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHLEvh2a3Bo1lPJC_cVzkLHSscqT4Zd4VBKxypPhl3hUOg9VGmvTd91pzVltLEaNW0uQv5kXinTtcg7WAbL3erb&_nc_ohc=CiZPfyDEZJsQ7kNvwEBO-Re&_nc_oc=AdrsQ5HLm2W_iiRZVL4prk455jxDfpFWRzXEMR5nZua7FOXVpvtzxqwnr1wi5_72NOE&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=kg1gdnTTJQD9E7SahSw_lA&_nc_ss=7b2a8&oh=00_AQG3tlAuNHqHLPWqpnt8mBZ3c7IcR7mTodvQHnjHCuH9lA&oe=6A722B16",
    type: "Programming Contest",
    name: "AUST CSE CARNIVAL 6.0 | IAPC",
    rank: "Champion",
    team: "AUST_FORCEDCODERS",
    solved: "6 Problems",
    totTeams: "50+",
  },
  {
    img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/468223187_122185012718182066_4323535638077374401_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGEs4-ij_0ImZz3v03VT2jmKKMrIY59sWMooyshjn2xY8ftl2EzpD2NaAGz7cugSqCHiEwknYj3cxjMEGWUEG-e&_nc_ohc=bG-mVdBZ7DYQ7kNvwHp3-Ak&_nc_oc=AdqXuntnv23LdYWaLQrRRwNQrvwdW5Lx8cMdKfCmWP6QZGBLTWgmk4zcRRk_j8REBXI&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=hUgu4HtTqBiu7e3iG3amEQ&_nc_ss=7b2a8&oh=00_AQFe3o87YQPP4iVM9PuGkMu8BXpAdu_o_ztsZDoVPWTxtA&oe=6A720F2D",
    type: "Programming Contest",
    name: "AUST CSE CARNIVAL 1.0 | IAPC",
    rank: "Champion - Junior Segment",
    team: "AUST_CODECRUSADERS",
    solved: "2 Problems",
    totTeams: "50+",
  },
];
export const Achievements = () => {
  const scrollRef = useRef(null);
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
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Achievements,
            <span className="font-serif italic font-normal text-white">
              {" "}
              milestones along the journey
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of competitive programming accomplishments, contest
            rankings, certifications, and recognitions that reflect my growth,
            dedication, and passion for continuous learning.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden hide-scrollbar animate-fade-in animation-delay-300"
        >
          {achievements.map((item, idx) => (
            <FlipCard key={idx} item={item} />
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center gap-8">
          <div
            onClick={() => scroll("left")}
            className="w-12 h-12 glass rounded-full flex justify-center items-center cursor-pointer"
          >
            <ArrowLeft />
          </div>
          <div
            onClick={() => scroll("right")}
            className="w-12 h-12 glass rounded-full flex justify-center items-center cursor-pointer"
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};
